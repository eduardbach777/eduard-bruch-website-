#!/usr/bin/env python3
"""Combine translated part files into one array and validate against the payload.
Usage: python3 combine.py <app> <locale> <part1.json> [part2.json ...]
Writes translated/{app}_{locale}.json if everything checks out; exits non-zero otherwise.
Checks: valid JSON, slug set == payload slug set, no empty fields, no item left
identical to the English payload (silent-fallback detection), no English-looking titles."""
import json, sys, os, re

TOOLS = os.path.dirname(os.path.abspath(__file__))
FULL_ENGLISH = re.compile(r'^(How to |What Is |Best )')

def main():
    app, locale = sys.argv[1], sys.argv[2]
    parts = sys.argv[3:]

    with open(f"{TOOLS}/{app}_payload.json", encoding="utf-8") as f:
        payload = {item["slug"]: item for item in json.load(f)}

    combined = []
    for p in parts:
        with open(p, encoding="utf-8") as f:
            combined.extend(json.load(f))

    errors = []
    slugs = [i["slug"] for i in combined]
    if len(slugs) != len(set(slugs)):
        errors.append("duplicate slugs in combined output")
    missing = set(payload) - set(slugs)
    extra = set(slugs) - set(payload)
    if missing:
        errors.append(f"missing slugs: {sorted(missing)}")
    if extra:
        errors.append(f"unknown slugs: {sorted(extra)}")

    for item in combined:
        slug = item["slug"]
        if slug not in payload:
            continue
        for field in ("title", "description", "content"):
            if not item.get(field, "").strip():
                errors.append(f"{slug}: empty {field}")
            elif item[field] == payload[slug][field]:
                errors.append(f"{slug}: {field} identical to English (untranslated fallback)")
        if FULL_ENGLISH.match(item.get("title", "")):
            errors.append(f"{slug}: title looks English: {item['title']!r}")

    if errors:
        print(f"FAIL {app}/{locale}: {len(errors)} issue(s)")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)

    # keep payload order
    order = {s: i for i, s in enumerate(payload)}
    combined.sort(key=lambda x: order[x["slug"]])
    out = f"{TOOLS}/translated/{app}_{locale}.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(combined, f, ensure_ascii=False)
    print(f"OK {app}/{locale}: {len(combined)} articles -> {out}")

if __name__ == "__main__":
    main()
