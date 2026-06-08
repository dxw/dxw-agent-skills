import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const configPath = path.resolve(rootDir, "eleventy.config.js");
const indexPath = path.resolve(rootDir, "content/index.md");

if (!fs.existsSync(configPath)) {
  throw new Error("Missing eleventy.config.js");
}

if (!fs.existsSync(indexPath)) {
  throw new Error("Missing content/index.md");
}

console.log("Smoke test passed.");
