import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import slugify from "slugify";

const REQUIRED_FRONTMATTER = [
  "name",
  "description",
  "category",
  "tags",
  "owner",
  "status",
  "lastReviewed",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const skillsRoot = path.resolve(__dirname, "../../../.agents/skills");

function readSkill(skillDirName) {
  const skillPath = path.join(skillsRoot, skillDirName, "SKILL.md");
  if (!fs.existsSync(skillPath)) return null;

  const file = fs.readFileSync(skillPath, "utf8");
  const parsed = matter(file);
  const data = parsed.data || {};

  const missingFields = REQUIRED_FRONTMATTER.filter((key) => {
    const value = data[key];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || value === "";
  });

  const derivedTitle = skillDirName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const title = data.name || derivedTitle;
  const description = data.description || "No summary provided yet.";

  return {
    slug: slugify(skillDirName, { lower: true, strict: true }),
    name: title,
    description: description,
    category: data.category || "uncategorized",
    tags: Array.isArray(data.tags) ? data.tags : [],
    owner: data.owner || "unassigned",
    status: data.status || "draft",
    lastReviewed: data.lastReviewed || "",
    sourcePath: skillPath,
    content: parsed.content.trim(),
    metadataMissing: missingFields,
    fullData: file,
  };
}

export default () => {
  if (!fs.existsSync(skillsRoot)) return [];

  return fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readSkill(entry.name))
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name));
};
