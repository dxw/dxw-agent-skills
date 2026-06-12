import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const testsDir = import.meta.dirname;

const specFiles = fs
  .readdirSync(testsDir)
  .filter((fileName) => fileName.endsWith(".spec.mjs"))
  .sort();

if (specFiles.length === 0) {
  throw new Error("No test files found matching tests/*.spec.mjs");
}

for (const specFile of specFiles) {
  const specPath = path.join(testsDir, specFile);
  await import(pathToFileURL(specPath).href);
}
