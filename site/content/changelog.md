---
layout: layouts/doc.njk
title: Changelog
permalink: "/changelog/index.html"
pagination:
  data: collections.changelogEntries
  size: 10
  alias: items
---

## Project Changelog

This page summarizes changes for the documentation site.

{% include "partials/changelog-list.njk" %}

{% include "partials/pagination.njk" %}
