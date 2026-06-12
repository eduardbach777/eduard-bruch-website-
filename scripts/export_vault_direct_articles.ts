import { writeFileSync } from "node:fs";
import { articles } from "../src/app/vault/blog/_data/index";

const directArticles = Object.fromEntries(
  Object.entries(articles.en).filter(
    ([, article]) =>
      article.cluster === "direct-infidelity" ||
      article.cluster === "core-cheating" ||
      article.cluster === "partner-specific" ||
      article.cluster === "lgbtq-affairs" ||
      article.cluster === "messaging-dating" ||
      article.cluster === "intimate-media" ||
      article.cluster === "discovery-risk" ||
      article.cluster === "infidelity-synonyms",
  ),
);

writeFileSync(
  "/tmp/vault-direct-articles-en.json",
  JSON.stringify(directArticles),
);

console.log(`Exported ${Object.keys(directArticles).length} direct articles.`);
