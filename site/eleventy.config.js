import { DateTime } from "luxon";
import CleanCSS from "clean-css";
import postCSS from "postcss";
import autoprefixer from "autoprefixer";
import UglifyJS from "uglify-js";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import slugify from "slugify";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItHightlightjs from "markdown-it-highlightjs";
import hljs from 'highlight.js';

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/_scss");
  eleventyConfig.addWatchTarget("./../.agents/");

  eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: "---+---",
	});

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
    // The base URL: defaults to Path Prefix
    // baseHref: eleventyConfig.pathPrefix,

    // Comma separated list of output file extensions to apply
    // our transform to. Use `false` to opt-out of the transform.
    extensions: "html",
  });

  // Minify CSS
  eleventyConfig.addFilter('cssMin', function (code) {
    let css = new CleanCSS({}).minify(code).styles;
    return postCSS([ autoprefixer ]).process(css).css;
  });

  // Minify JS
  eleventyConfig.addFilter('jsMin', function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error);
      return code;
    }
    return minified.code;
  });

  // Return active path attributes
  eleventyConfig.addShortcode('activePath', function (itemUrl, currentUrl) {
    if (itemUrl == '/' && itemUrl !== currentUrl) {
      return '';
    }
    if (currentUrl && currentUrl.includes(itemUrl)) {
      return ' data-current="current item" class="current"';
    }
    return '';
  });

  eleventyConfig.addFilter("dateIso", (value) => {
    if (!value) return "";
    return new Date(value).toISOString().slice(0, 10);
  });

  // Date filter to convert date objects to ISO 8601 format
  eleventyConfig.addFilter('iso8601', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO()
  })

  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("versionLabel", (version) => {
    if (!version || version === "latest") return "Latest";
    return `v${version}`;
  });

  eleventyConfig.addCollection("changelogEntries", (collectionApi) =>
    collectionApi.getFilteredByGlob("content/changelog/*.md").reverse(),
  );


  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "direct-link do-not-display",
        symbol: "#",
        level: [1,2,3,4],
      }),
      slugify: eleventyConfig.getFilter("slugify")
    })
    .use(markdownItHightlightjs, {hljs})
    .use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addFilter("markdown", (content, ril = false) => {
    return ril ? markdownLibrary.renderInline(content) : markdownLibrary.render(content);
  });

  eleventyConfig.addPairedShortcode("Markdown", (content, ril = false) => {
    return ril ? markdownLibrary.renderInline(content) : markdownLibrary.render(content);
  });

};

export const config = {
  dir: {
    input: "./content",
    includes: "../src/_includes",
    data: "../src/_data",
    output: "./_site",
  },
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
  templateFormats: ["md", "njk", "11ty.js"],
  pathPrefix: "/",
  passthroughFileCopy: true,
};
