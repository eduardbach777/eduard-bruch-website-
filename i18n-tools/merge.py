#!/usr/bin/env python3
"""Merge a translated JSON payload back into a proper .ts locale file.
Deterministic TS generation avoids the syntax bugs freehand LLM writes caused."""
import json, sys, re

BASE = "/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/src/app"

READ_TIME = {
    "de": "{n} Min. Lesezeit", "fr": "{n} min de lecture", "es": "{n} min de lectura",
    "pt": "{n} min de leitura", "it": "{n} min di lettura", "nl": "{n} min leestijd",
    "ja": "{n}分で読めます", "ko": "{n}분 읽기", "zh": "{n}分钟阅读", "zh-Hant": "{n}分鐘閱讀",
    "ru": "{n} мин. чтения", "tr": "{n} dk okuma", "pl": "{n} min czytania",
    "sv": "{n} min läsning", "da": "{n} min læsning", "no": "{n} min lesing",
    "fi": "{n} min lukuaika", "ar": "{n} دقائق قراءة", "he": "{n} דקות קריאה",
    "th": "{n} นาทีในการอ่าน", "ms": "{n} min bacaan", "vi": "{n} phút đọc",
    "uk": "{n} хв. читання", "ca": "{n} min de lectura", "el": "{n} λεπτά ανάγνωσης",
    "hr": "{n} min čitanja", "sk": "{n} min čítania", "cs": "{n} min čtení",
    "ro": "{n} min de citit", "hu": "{n} perc olvasás", "id": "{n} menit baca",
    "hi": "{n} मिनट पढ़ने का समय",
}

def ts_string(s):
    """Produce a double-quoted TS string literal, safely escaped."""
    return json.dumps(s, ensure_ascii=False)

def ts_template(s):
    """Produce a backtick template literal, safely escaped for ` and ${ """
    escaped = s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    return f"`{escaped}`"

def var_name(locale):
    return "zhHantArticles" if locale == "zh-Hant" else f"{locale}Articles"

if __name__ == "__main__":
    app, locale, translated_path = sys.argv[1], sys.argv[2], sys.argv[3]

    with open(translated_path, "r", encoding="utf-8") as f:
        translated = json.load(f)
    with open(f"/private/tmp/claude-501/-Users-eduardbruch/6a13c7ca-7b4a-45c8-bd24-483eec58735d/scratchpad/{app}_meta.json", "r", encoding="utf-8") as f:
        meta = json.load(f)

    rt_template = READ_TIME.get(locale, "{n} min read")

    lines = ['import type { ArticleSet } from "./index";', ""]
    lines.append(f"export const {var_name(locale)}: ArticleSet = {{")

    for item in translated:
        slug = item["slug"]
        m = meta.get(slug, {"date": "2026-09-06", "readMin": "4"})
        rt = rt_template.replace("{n}", m["readMin"])
        lines.append(f'  {ts_string(slug)}: {{')
        lines.append(f'    slug: {ts_string(slug)},')
        lines.append(f'    title: {ts_string(item["title"])},')
        lines.append(f'    description: {ts_string(item["description"])},')
        lines.append(f'    date: {ts_string(m["date"])},')
        lines.append(f'    readTime: {ts_string(rt)},')
        lines.append(f'    content: {ts_template(item["content"])},')
        lines.append('  },')

    lines.append("};")
    lines.append("")

    out_path = f"{BASE}/{app}/blog/_data/{locale}.ts"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Wrote {out_path} ({len(translated)} articles)")
