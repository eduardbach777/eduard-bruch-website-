#!/usr/bin/env python3
"""Wire the shared buildStoreUrl() helper into the per-app blog pages so every
App Store link carries a `ct` campaign token. One-off migration script.

Shape 1: src/app/{app}/blog/[locale]/page.tsx       — const APP_STORE_URL
Shape 2: src/app/{app}/blog/[locale]/[slug]/page.tsx — const storeUrl (+ regex rewrite,
         which then propagates the token to every in-body article link for free)
"""
import re
import sys

BASE = "/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/src/app"

# app route -> (appSlug in the store URL, numeric app id)
APPS = {
    "sounddial":  ("sounddial",  "6772792641"),
    "jetty":      ("jetty",      "6806639647"),
    "loupe":      ("loupe",      "6806599791"),
    "dayedge":    ("dayedge",    "6806600925"),
    "renym":      ("renym",      "6806640534"),
    "optic":      ("optic",      "6806597766"),
    "lockin":     ("lockin",     "6802325423"),
    "tome":       ("tome",       "6806639875"),
    "mediasmith": ("mediasmith", "6805031846"),
    "bellows":    ("bellows",    "6805032839"),
    "tickpull":   ("tickpull",   "6806640763"),
    "deskcloak":  ("deskcloak",  "6806639170"),
    "canopy":     ("canopy",     "6806640970"),
}

IMPORT_LINE = 'import { buildStoreUrl, campaignFor } from "@/lib/appstore";'


def add_import(src: str) -> str:
    """Insert the helper import after the last existing import line."""
    if IMPORT_LINE in src:
        return src
    lines = src.split("\n")
    last_import = max(i for i, l in enumerate(lines) if l.startswith("import "))
    lines.insert(last_import + 1, IMPORT_LINE)
    return "\n".join(lines)


def patch_blog_index(app: str, slug: str, app_id: str) -> str:
    path = f"{BASE}/{app}/blog/[locale]/page.tsx"
    with open(path, encoding="utf-8") as f:
        src = f.read()

    pattern = re.compile(r'^const APP_STORE_URL = "[^"]*";$', re.M)
    if not pattern.search(src):
        return f"SKIP {app} (index): APP_STORE_URL const not found"

    replacement = (
        f'const APP_STORE_URL = buildStoreUrl({{\n'
        f'  appSlug: "{slug}",\n'
        f'  appId: "{app_id}",\n'
        f'  campaign: campaignFor.blogIndex("{app}"),\n'
        f'}});'
    )
    src = pattern.sub(replacement, src, count=1)
    src = add_import(src)

    with open(path, "w", encoding="utf-8") as f:
        f.write(src)
    return f"OK   {app} (index)"


def patch_article(app: str, slug: str, app_id: str) -> str:
    path = f"{BASE}/{app}/blog/[locale]/[slug]/page.tsx"
    with open(path, encoding="utf-8") as f:
        src = f.read()

    # const storeUrl = `https://apps.apple.com/${cc}/app/<slug>/id<id>`;
    pattern = re.compile(
        r'^  const storeUrl = `https://apps\.apple\.com/\$\{cc\}/app/[^`]*`;$', re.M
    )
    if not pattern.search(src):
        return f"SKIP {app} (article): storeUrl const not found"

    replacement = (
        f'  const storeUrl = buildStoreUrl({{\n'
        f'    appSlug: "{slug}",\n'
        f'    appId: "{app_id}",\n'
        f'    cc,\n'
        f'    campaign: campaignFor.article("{app}"),\n'
        f'  }});'
    )
    src = pattern.sub(replacement, src, count=1)
    src = add_import(src)

    with open(path, "w", encoding="utf-8") as f:
        f.write(src)
    return f"OK   {app} (article)"


if __name__ == "__main__":
    failures = 0
    for app, (slug, app_id) in APPS.items():
        for result in (patch_blog_index(app, slug, app_id),
                       patch_article(app, slug, app_id)):
            print(result)
            if result.startswith("SKIP"):
                failures += 1
    sys.exit(1 if failures else 0)
