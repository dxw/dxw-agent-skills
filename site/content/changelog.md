---
layout: layouts/doc.njk
title: Changelog
permalink: "/changelog/index.html"
pagination:
  data: collections.changelogEntries
  size: 10
  alias: items
---

This page summarizes changes for the documentation site.

---

{% set listName = "changelog" %}
{% include "partials/item-list.njk" %}

{% include "partials/pagination.njk" %}
