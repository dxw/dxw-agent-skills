module.exports = class {
  data() {
    return {
      permalink: "/search-index.json",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const pages = [
      {
        type: "page",
        title: "Home",
        summary: "Agent skills documentation home",
        tags: [],
        url: "/",
      },
      {
        type: "page",
        title: "Getting Started",
        summary: "How to run and build docs",
        tags: ["setup"],
        url: "/getting-started/",
      },
      {
        type: "page",
        title: "Changelog",
        summary: "Documentation site change history",
        tags: ["release"],
        url: "/changelog/",
      },
      {
        type: "page",
        title: "Versions",
        summary: "Supported documentation versions",
        tags: ["versioning"],
        url: "/versions/",
      },
    ];

    const generated = Array.isArray(data.searchIndexGenerated) ? data.searchIndexGenerated : [];

    return JSON.stringify([...pages, ...generated], null, 2);
  }
};
