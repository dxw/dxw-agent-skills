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

if (homeHtml.includes('class="site-logo-link"')) {
  throw new Error("Homepage should not render a .site-logo-link wrapper");
}

if (!gettingStartedHtml.includes('class="site-logo-link"')) {
  throw new Error("Non-home page should render a .site-logo-link wrapper");
}

if (!gettingStartedHtml.includes('class="site-logo-link" href="/"')) {
  throw new Error(".site-logo-link should point to homepage with href=\"/\"");
}

console.log("Header link logic test passed.");
