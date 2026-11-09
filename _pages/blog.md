---
layout: folio-page
permalink: /blog/
title: Blog
eyebrow: Notes & reflections
description: Notes on research, AI, and the human experience.
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

{% include folio-posts.liquid %}

{% if paginator.total_pages > 1 %}
<nav class="blog-pagination" aria-label="Blog pages">
  {% if paginator.previous_page %}<a class="text-link" href="{{ paginator.previous_page_path | relative_url }}">← Newer posts</a>{% endif %}
  <span>Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}<a class="text-link" href="{{ paginator.next_page_path | relative_url }}">Older posts →</a>{% endif %}
</nav>
{% endif %}
