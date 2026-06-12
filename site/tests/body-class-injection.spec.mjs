import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const builtHomePath = path.resolve(rootDir, "_site/index.html");
const builtGettingStartedPath = path.resolve(
  rootDir,
  "_site/getting-started/index.html",
);

if (!fs.existsSync(builtHomePath)) {
  throw new Error("Missing built homepage at _site/index.html; run build first");
}

if (!fs.existsSync(builtGettingStartedPath)) {
  throw new Error(
    "Missing built page at _site/getting-started/index.html; run build first",
  );
}

const homeHtml = fs.readFileSync(builtHomePath, "utf8");
const gettingStartedHtml = fs.readFileSync(builtGettingStartedPath, "utf8");

if (!homeHtml.includes('<body class="home page home-page">')) {
  throw new Error(
    "Homepage should include slugified title plus custom classes in body class",
  );
}

if (!gettingStartedHtml.includes('<body class="getting-started">')) {
  throw new Error(
    "Getting Started page should include only slugified title when no custom classes exist",
  );
}

console.log("Body class injection test passed.");
