---
layout: layouts/doc.njk
title: Versions
permalink: "/versions/index.html"
---

## Supported Versions

{% for version in versions.all %}

- {{ version | versionLabel }}{% if version == versions.latest %} (default){% endif %}
  {% endfor %}
