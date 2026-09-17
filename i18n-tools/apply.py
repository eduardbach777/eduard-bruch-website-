#!/usr/bin/env python3
"""One-shot driver: part files -> combined -> topup (guarded) -> merged .ts

Usage:
    python3 apply.py <app> <locale> [<locale> ...]

For each locale, globs translated/{app}_{locale}_part*.json, concatenates them in
numeric part order, runs topup.py's guards, then merge.py. Skips (without failing)
any locale that has no part files yet, so it is safe to re-run as agents land.
"""
import glob
import json
import os
import re
import subprocess
import sys

TOOLS = os.path.dirname(os.path.abspath(__file__))


def part_files(app, locale):
    pat = f"{TOOLS}/translated/{app}_{locale}_part*.json"
    files = glob.glob(pat)
    # part10 must sort after part9
    return sorted(files, key=lambda p: int(re.search(r"part(\d+)", p).group(1)))


def apply_locale(app, locale):
    parts = part_files(app, locale)
    if not parts:
        print(f"SKIP {app}/{locale}: no part files yet")
        return None

    merged = []
    for p in parts:
        with open(p, encoding="utf-8") as f:
            merged.extend(json.load(f))

    new_path = f"{TOOLS}/translated/{app}_{locale}_new.json"
    with open(new_path, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False)
    print(f"  {app}/{locale}: {len(parts)} parts -> {len(merged)} new articles")

    r = subprocess.run(
        [sys.executable, f"{TOOLS}/topup.py", app, locale, new_path],
        capture_output=True, text=True,
    )
    print("  " + r.stdout.strip().replace("\n", "\n  "))
    if r.returncode != 0:
        print(f"  ABORTED {app}/{locale} — topup guards failed, .ts untouched")
        return False

    full = f"{TOOLS}/translated/{app}_{locale}_full.json"
    r = subprocess.run(
        [sys.executable, f"{TOOLS}/merge.py", app, locale, full],
        capture_output=True, text=True,
    )
    print("  " + r.stdout.strip())
    return r.returncode == 0


if __name__ == "__main__":
    app, locales = sys.argv[1], sys.argv[2:]
    results = {l: apply_locale(app, l) for l in locales}
    ok = [l for l, v in results.items() if v is True]
    failed = [l for l, v in results.items() if v is False]
    skipped = [l for l, v in results.items() if v is None]
    print(f"\n{app}: {len(ok)} applied, {len(failed)} failed, {len(skipped)} skipped")
    if failed:
        print(f"  FAILED: {', '.join(failed)}")
        sys.exit(1)
