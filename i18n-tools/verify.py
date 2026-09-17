#!/usr/bin/env python3
"""Verify translated .ts locale files for silent partial-English fallback and syntax issues.
Run from repo root: python3 i18n-tools/verify.py
See i18n-tools/HANDOFF.md section 5 for context on why this exists."""
import re, os, sys

# All 13 app blogs. sounddial/jetty/loupe/tickpull/deskcloak/canopy were missing from
# this list, so they were never scanned at all — including sounddial, the largest and
# highest-traffic blog on the site.
APPS = ["bellows", "mediasmith", "lockin", "tome", "optic", "renym", "dayedge",
        "sounddial", "jetty", "loupe", "tickpull", "deskcloak", "canopy"]
LANGS = ["de", "fr", "es", "ja", "ko", "zh", "pt", "it", "ru", "nl", "tr",
         "ar", "he", "th", "ms", "vi", "uk", "ca", "el", "hr", "sk", "cs",
         "ro", "hu", "id", "hi", "sv", "da", "no", "fi", "zh-Hant", "pl"]

FULL_ENGLISH = re.compile(r'^(How to |What Is |Best |Native )')

def count_articles(path):
    """Number of article entries in a locale file."""
    with open(path, encoding="utf-8") as f:
        return len(re.findall(r'^\s{2}"[\w-]+":\s*\{', f.read(), re.M))


def article_tag_counts(path):
    """{slug: number of HTML tags in its content}.

    Tag count is the only language-independent measure of whether a translation
    still contains all of its content. Character length is useless here — CJK
    renders the same article in a fraction of the characters — which is why 171
    articles that had whole <h2> sections dropped passed every other check.
    """
    with open(path, encoding="utf-8") as f:
        src = f.read()
    counts = {}
    for m in re.finditer(r'^\s{2}"([\w-]+)":\s*\{', src, re.M):
        slug = m.group(1)
        i = src.find("content: `", m.end())
        if i < 0:
            continue
        p = i + len("content: `")
        while p < len(src):
            if src[p] == "`":
                bs = 0
                q = p - 1
                while q >= 0 and src[q] == "\\":
                    bs += 1
                    q -= 1
                if bs % 2 == 0:
                    break
            p += 1
        counts[slug] = len(re.findall(r"</?[a-zA-Z0-9]+", src[i:p]))
    return counts


def main():
    apps = sys.argv[1:] if len(sys.argv) > 1 else APPS
    issues = 0
    checked = 0
    empty = 0
    short = 0
    thin = 0
    for app in apps:
        en_path = f"src/app/{app}/blog/_data/en.ts"
        en_count = count_articles(en_path) if os.path.exists(en_path) else 0
        en_tags = article_tag_counts(en_path) if os.path.exists(en_path) else {}

        for lang in LANGS:
            path = f"src/app/{app}/blog/_data/{lang}.ts"
            if not os.path.exists(path):
                continue
            checked += 1
            with open(path, encoding="utf-8") as f:
                content = f.read()
            if content.rstrip()[-2:] != "};":
                print(f"BROKEN (not closed): {app}/{lang}")
                issues += 1
                continue
            titles = re.findall(r'title: "((?:[^"\\]|\\.)*)"', content)
            if not titles:
                empty += 1  # not-yet-translated stub — expected, not an issue
                continue

            # A locale can be perfectly valid TS, fully translated, and still be
            # missing articles entirely — which is invisible to every other check
            # here. This is how SoundDial sat at 96/111 in all 11 languages unnoticed.
            n = count_articles(path)
            if en_count and n < en_count:
                print(f"SHORT {app}/{lang}: {n}/{en_count} articles ({en_count - n} missing)")
                short += 1

            # Content dropped *within* an article — whole <h2> sections missing.
            if en_tags:
                loc_tags = article_tag_counts(path)
                lost = [
                    (s, loc_tags[s], en_tags[s])
                    for s in loc_tags
                    if s in en_tags and loc_tags[s] < en_tags[s] - 2
                ]
                if lost:
                    print(f"THIN  {app}/{lang}: {len(lost)} article(s) missing content")
                    for s, g, e in lost[:3]:
                        print(f"        {s}: {g} tags vs {e}")
                    thin += len(lost)
            # "Native" is a common false positive (legitimate loanword in many languages)
            eng = [t for t in titles if FULL_ENGLISH.match(t) and "Native" not in t]
            if eng:
                print(f"ISSUE {app}/{lang}: {len(eng)}/{len(titles)} titles look English:")
                for t in eng:
                    print(f"    {t}")
                issues += 1

    print(
        f"\nChecked {checked} files: {empty} not-yet-translated (stub), "
        f"{issues} broken/partial-English, {short} short on article count, "
        f"{thin} articles missing content."
    )
    if issues == 0 and short == 0 and thin == 0:
        print("✅ NO BROKEN, PARTIAL, SHORT, OR THIN TRANSLATIONS")

if __name__ == "__main__":
    main()
