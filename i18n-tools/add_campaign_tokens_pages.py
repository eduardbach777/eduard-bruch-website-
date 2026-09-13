#!/usr/bin/env python3
"""Second half of the campaign-token migration: the homepage array, the /overview
array, and the standalone app landing pages. One-off script.

Shape 3: raw inline literals  — loupe/tome/optic landing pages
Shape 4: array-of-objects     — src/app/page.tsx, src/app/overview/page.tsx
"""
import re
import sys

BASE = "/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/src/app"
IMPORT_LINE = 'import { buildStoreUrl, campaignFor } from "@/lib/appstore";'

URL_RE = re.compile(
    r'"https://apps\.apple\.com/(?:([a-z0-9-]+)/)?app/(?:([a-z0-9-]+)/)?id(\d+)"'
)


def add_import(src: str) -> str:
    if IMPORT_LINE in src:
        return src
    lines = src.split("\n")
    last_import = max(i for i, l in enumerate(lines) if l.startswith("import "))
    lines.insert(last_import + 1, IMPORT_LINE)
    return "\n".join(lines)


def to_call(match: re.Match, campaign_expr: str) -> str:
    # group(1) is a storefront cc only if group(2)/group(3) follow; these URLs
    # have no cc segment, so treat group(1) as the slug when group(2) is absent.
    seg1, seg2, app_id = match.group(1), match.group(2), match.group(3)
    slug = seg2 or seg1
    parts = []
    if slug:
        parts.append(f'appSlug: "{slug}"')
    parts.append(f'appId: "{app_id}"')
    parts.append(f"campaign: {campaign_expr}")
    return "buildStoreUrl({ " + ", ".join(parts) + " })"


def patch(path: str, campaign_expr, label: str) -> str:
    with open(path, encoding="utf-8") as f:
        src = f.read()

    count = len(URL_RE.findall(src))
    if count == 0:
        return f"SKIP {label}: no App Store URLs found"

    def repl(m: re.Match) -> str:
        expr = campaign_expr(m) if callable(campaign_expr) else campaign_expr
        return to_call(m, expr)

    src = URL_RE.sub(repl, src)
    src = add_import(src)
    with open(path, "w", encoding="utf-8") as f:
        f.write(src)
    return f"OK   {label}: {count} URL(s)"


if __name__ == "__main__":
    results = [
        patch(f"{BASE}/page.tsx", "campaignFor.home()", "homepage"),
        patch(f"{BASE}/overview/page.tsx", "campaignFor.overview()", "overview"),
        patch(f"{BASE}/loupe/page.tsx", 'campaignFor.landing("loupe")', "loupe landing"),
        patch(f"{BASE}/tome/page.tsx", 'campaignFor.landing("tome")', "tome landing"),
        patch(f"{BASE}/optic/page.tsx", 'campaignFor.landing("optic")', "optic landing"),
    ]
    for r in results:
        print(r)
    sys.exit(1 if any(r.startswith("SKIP") for r in results) else 0)
