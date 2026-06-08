import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const required = ["name", "description", "category", "tags", "owner", "status", "last_reviewed"];

const rootDir = path.resolve(import.meta.dirname, "..");
const skillsDir = path.resolve(rootDir, "../.agents/skills");

if (!fs.existsSync(skillsDir)) {
  console.log("No skills directory found. Skipping validation.");
  process.exit(0);
}

const failures = [];

for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const skillFile = path.join(skillsDir, entry.name, "SKILL.md");
  if (!fs.existsSync(skillFile)) {
    failures.push(`${entry.name}: missing SKILL.md`);
    continue;
  }

  const parsed = matter(fs.readFileSync(skillFile, "utf8"));
  const missing = required.filter((field) => {
    const value = parsed.data[field];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || value === "";
  });

  if (missing.length > 0) {
    failures.push(`${entry.name}: missing ${missing.join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error("Skill metadata validation failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("All skill frontmatter metadata checks passed.");
