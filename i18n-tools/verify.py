#!/usr/bin/env python3
"""Verify translated .ts locale files for silent partial-English fallback and syntax issues.
Run from repo root: python3 i18n-tools/verify.py
See i18n-tools/HANDOFF.md section 5 for context on why this exists."""
import re, os, sys

APPS = ["bellows", "mediasmith", "lockin", "tome", "optic", "renym", "dayedge"]
LANGS = ["de", "fr", "es", "ja", "ko", "zh", "pt", "it", "ru", "nl", "tr",
         "ar", "he", "th", "ms", "vi", "uk", "ca", "el", "hr", "sk", "cs",
         "ro", "hu", "id", "hi", "sv", "da", "no", "fi", "zh-Hant", "pl"]

FULL_ENGLISH = re.compile(r'^(How to |What Is |Best |Native )')

def main():
    apps = sys.argv[1:] if len(sys.argv) > 1 else APPS
    issues = 0
    checked = 0
    empty = 0
    for app in apps:
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
            # "Native" is a common false positive (legitimate loanword in many languages)
            eng = [t for t in titles if FULL_ENGLISH.match(t) and "Native" not in t]
            if eng:
                print(f"ISSUE {app}/{lang}: {len(eng)}/{len(titles)} titles look English:")
                for t in eng:
                    print(f"    {t}")
                issues += 1

    print(f"\nChecked {checked} files: {empty} not-yet-translated (stub), {issues} broken/partial.")
    if issues == 0:
        print("✅ NO BROKEN OR PARTIAL TRANSLATIONS")

if __name__ == "__main__":
    main()
