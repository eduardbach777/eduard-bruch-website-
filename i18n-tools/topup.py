#!/usr/bin/env python3
"""Add newly-translated articles to an EXISTING locale file without losing what's there.

Why this exists: merge.py rewrites a locale .ts wholesale from the array it is given.
Handing it only the new articles would silently destroy every existing translation in
that file. This script parses what is already on disk, unions the new articles in, and
refuses to write anything unless the result is provably a superset.

Usage:
    python3 topup.py <app> <locale> <new_translations.json>

Writes translated/{app}_{locale}_full.json, which is then passed to merge.py.
"""
import json
import os
import re
import sys

from extract import parse_en_ts

TOOLS = os.path.dirname(os.path.abspath(__file__))
BASE = "/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/src/app"

FIELDS = ("title", "description", "content")


def en_slug_order(app):
    """Canonical article order, taken from en.ts."""
    path = f"{BASE}/{app}/blog/_data/en.ts"
    with open(path, encoding="utf-8") as f:
        return re.findall(r'^\s{2}"([\w-]+)":\s*\{', f.read(), re.M)


def main():
    app, locale, new_path = sys.argv[1], sys.argv[2], sys.argv[3]

    order = en_slug_order(app)
    locale_path = f"{BASE}/{app}/blog/_data/{locale}.ts"

    existing = {}
    if os.path.exists(locale_path):
        for a in parse_en_ts(locale_path):
            existing[a["slug"]] = {k: a[k] for k in ("slug", *FIELDS)}

    with open(new_path, encoding="utf-8") as f:
        incoming = {a["slug"]: a for a in json.load(f)}

    merged = dict(existing)
    merged.update(incoming)  # new wins on collision

    errors = []

    # 1. Never shrink a locale file.
    if len(merged) < len(existing):
        errors.append(f"result {len(merged)} < existing {len(existing)} — would lose articles")

    # 2. Every pre-existing slug must survive.
    lost = set(existing) - set(merged)
    if lost:
        errors.append(f"lost pre-existing slugs: {sorted(lost)}")

    # 3. Pre-existing articles not being replaced must be byte-identical.
    for slug, art in existing.items():
        if slug in incoming:
            continue
        if any(merged[slug][k] != art[k] for k in FIELDS):
            errors.append(f"{slug}: pre-existing text changed unexpectedly")

    # 4. Result must match en.ts exactly.
    unknown = set(merged) - set(order)
    if unknown:
        errors.append(f"slugs not present in en.ts: {sorted(unknown)}")
    if len(merged) != len(order):
        still_missing = [s for s in order if s not in merged]
        errors.append(f"result {len(merged)} != en.ts {len(order)}; missing: {still_missing}")

    # 5. No empty fields.
    for slug, art in merged.items():
        for k in FIELDS:
            if not str(art.get(k, "")).strip():
                errors.append(f"{slug}: empty {k}")

    if errors:
        print(f"FAIL {app}/{locale}: {len(errors)} issue(s) — nothing written")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)

    ordered = [merged[s] for s in order]
    out = f"{TOOLS}/translated/{app}_{locale}_full.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(ordered, f, ensure_ascii=False)

    print(
        f"OK {app}/{locale}: {len(existing)} existing + {len(incoming)} new "
        f"-> {len(ordered)} total ({out})"
    )


if __name__ == "__main__":
    main()
