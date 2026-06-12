import json
import re
from pathlib import Path

import torch
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer


MODEL_NAME = "facebook/nllb-200-distilled-600M"
SOURCE_PATH = Path("/tmp/vault-direct-translation-source.json")
CACHE_PATH = Path("/tmp/vault-direct-nllb-context-cache.json")

LOCALES = {
    "bn-BD": "ben_Beng",
    "ca": "cat_Latn",
    "cs": "ces_Latn",
    "da": "dan_Latn",
    "el": "ell_Grek",
    "fi": "fin_Latn",
    "he": "heb_Hebr",
    "hi": "hin_Deva",
    "hr": "hrv_Latn",
    "hu": "hun_Latn",
    "id": "ind_Latn",
    "it": "ita_Latn",
    "ja": "jpn_Jpan",
    "kn-IN": "kan_Knda",
    "ko": "kor_Hang",
    "ml-IN": "mal_Mlym",
    "mr-IN": "mar_Deva",
    "ms": "zsm_Latn",
    "nl-NL": "nld_Latn",
    "no": "nob_Latn",
    "or-IN": "ory_Orya",
    "pa-IN": "pan_Guru",
    "pl": "pol_Latn",
    "pt-BR": "por_Latn",
    "pt-PT": "por_Latn",
    "ro": "ron_Latn",
    "ru": "rus_Cyrl",
    "sk": "slk_Latn",
    "sl-SI": "slv_Latn",
    "sv": "swe_Latn",
    "ta-IN": "tam_Taml",
    "te-IN": "tel_Telu",
    "th": "tha_Thai",
    "tr": "tur_Latn",
    "uk": "ukr_Cyrl",
    "ur-PK": "urd_Arab",
    "vi": "vie_Latn",
    "zh-Hans": "zho_Hans",
    "zh-Hant": "zho_Hant",
}


def load_json(path: Path, fallback):
    try:
        return json.loads(path.read_text())
    except FileNotFoundError:
        return fallback


source = load_json(SOURCE_PATH, None)
if source is None:
    raise SystemExit(f"Missing translation source: {SOURCE_PATH}")

cache = load_json(CACHE_PATH, {})
keys = list(source)


def disambiguate(value: str) -> str:
    replacements = [
        (r"\bcheating husbands\b", "unfaithful husbands"),
        (r"\bcheating wives\b", "unfaithful wives"),
        (r"\bcheating spouse\b", "unfaithful spouse"),
        (r"\bcheaters\b", "unfaithful partners"),
        (r"\bcheating\b", "marital infidelity"),
        (r"\bcheat on\b", "be unfaithful to"),
        (r"\bcheat\b", "be unfaithful"),
    ]
    result = value
    for pattern, replacement in replacements:
        result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
    return result


values = [disambiguate(source[key]) for key in keys]
device = "mps" if torch.backends.mps.is_available() else "cpu"

print(f"Loading {MODEL_NAME} on {device}...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, src_lang="eng_Latn")
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME).to(device)
model.eval()

with torch.inference_mode():
    for locale, target_language in LOCALES.items():
        if locale in cache and len(cache[locale]) == len(source):
            print(f"Using cached {locale}.")
            continue

        print(f"Translating {locale} ({target_language})...")
        translated = []
        for start in range(0, len(values), 16):
            batch = values[start : start + 16]
            encoded = tokenizer(
                batch,
                return_tensors="pt",
                padding=True,
                truncation=True,
                max_length=384,
            ).to(device)
            output = model.generate(
                **encoded,
                forced_bos_token_id=tokenizer.convert_tokens_to_ids(
                    target_language
                ),
                max_length=384,
                num_beams=1,
            )
            translated.extend(
                tokenizer.batch_decode(output, skip_special_tokens=True)
            )

        cache[locale] = dict(zip(keys, translated, strict=True))
        CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False))

print(f"Wrote {CACHE_PATH}")
