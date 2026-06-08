import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import slugify from "slugify";

const rootDir = path.resolve(import.meta.dirname, "..");
const skillsDir = path.resolve(rootDir, "../.agents/skills");
const outputPath = path.resolve(rootDir, "src/_data/searchIndex.generated.json");

if (!fs.existsSync(skillsDir)) {
  fs.writeFileSync(outputPath, "[]\n", "utf8");
  process.exit(0);
}

const entries = fs
  .readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const skillFile = path.join(skillsDir, entry.name, "SKILL.md");
    if (!fs.existsSync(skillFile)) return null;

    const parsed = matter(fs.readFileSync(skillFile, "utf8"));
    const fallbackTitle = entry.name
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

    return {
      type: "skill",
      title: parsed.data.title || fallbackTitle,
      summary: parsed.data.summary || "",
      tags: Array.isArray(parsed.data.tags) ? parsed.data.tags : [],
      url: `/skills/${slugify(entry.name, { lower: true, strict: true })}/`,
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

fs.writeFileSync(outputPath, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
console.log(`Generated search index with ${entries.length} entries.`);
