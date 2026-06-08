import { DateTime } from "luxon";
import CleanCSS from "clean-css";
import postCSS from "postcss";
import autoprefixer from "autoprefixer";
import UglifyJS from "uglify-js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("../.agents/");
  eleventyConfig.addWatchTarget("src/_scss");

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

};

export const config = {
    dir: {
      input: "content",
      includes: "../src/_includes",
      data: "../src/_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "11ty.js"],
    pathPrefix: "/",
};
