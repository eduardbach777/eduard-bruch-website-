#!/usr/bin/env python3
"""Extract only translatable strings (title, description, content) from en.ts
into compact JSON. Keeps slug/date/readTime out — those are handled deterministically."""
import re, json, sys

BASE = "/Users/eduardbruch/Desktop/vscode/eduard-bruch-website/src/app"

def parse_en_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    articles = []
    slug_pattern = r'"([\w-]+)":\s*\{\s*slug:\s*"([\w-]+)"'
    slugs = re.findall(slug_pattern, content)

    for key, slug in slugs:
        start = content.index(f'"{key}": {{')
        content_start = content.index("content: `", start)
        pos = content_start + len("content: `")
        while pos < len(content):
            if content[pos] == '`':
                rest = content[pos+1:pos+50].strip()
                if rest.startswith(',') or rest.startswith('}'):
                    break
            pos += 1
        block = content[start:pos+1]

        title_m = re.search(r'title:\s*"((?:[^"\\]|\\.)*)"', block)
        desc_m = re.search(r'description:\s*\n?\s*"((?:[^"\\]|\\.)*)"', block)
        date_m = re.search(r'date:\s*"([^"]*)"', block)
        rt_m = re.search(r'readTime:\s*"(\d+)', block)
        content_m = re.search(r'content:\s*`([\s\S]*)`', block)

        if title_m and content_m:
            articles.append({
                "slug": slug,
                "title": title_m.group(1),
                "description": desc_m.group(1) if desc_m else "",
                "date": date_m.group(1) if date_m else "2026-09-06",
                "readMin": rt_m.group(1) if rt_m else "4",
                "content": content_m.group(1),
            })
    return articles

if __name__ == "__main__":
    app = sys.argv[1]
    articles = parse_en_ts(f"{BASE}/{app}/blog/_data/en.ts")
    # Output compact translation payload (slug/date/readMin excluded from what needs translating)
    payload = [{"slug": a["slug"], "title": a["title"], "description": a["description"], "content": a["content"]} for a in articles]
    meta = {a["slug"]: {"date": a["date"], "readMin": a["readMin"]} for a in articles}
    with open(f"/private/tmp/claude-501/-Users-eduardbruch/6a13c7ca-7b4a-45c8-bd24-483eec58735d/scratchpad/{app}_payload.json", "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False)
    with open(f"/private/tmp/claude-501/-Users-eduardbruch/6a13c7ca-7b4a-45c8-bd24-483eec58735d/scratchpad/{app}_meta.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False)
    print(f"{app}: {len(articles)} articles extracted")
