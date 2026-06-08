const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: [
      "_site/**",
      "node_modules/**",
      "src/_data/searchIndex.generated.json",
      "src/assets/css/main.css",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["src/assets/js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
