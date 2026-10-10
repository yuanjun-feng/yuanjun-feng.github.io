---
layout: folio-page
permalink: /photography/
title: Photography
eyebrow: A different kind of observation
description: Small moments, shifting light, and places along the way. Photographs by Yuanjun Feng.
nav: true
nav_order: 4
---

<div class="photo-grid">
  {% for photo in site.data.photographs %}
    {% assign image_path = photo.file | prepend: '/assets/img/photography/' %}
    {% assign image_stem = photo.file | split: '.' | first | prepend: '/assets/img/photography/' %}
    <figure>
      <a href="{{ image_path | relative_url }}" aria-label="Open photograph {{ forloop.index }} at full size">
        <picture>
          {% if site.imagemagick.enabled %}
            <source type="image/webp"
              srcset="{{ image_stem | append: '-480.webp' | relative_url }} 480w, {{ image_stem | append: '-800.webp' | relative_url }} 800w, {{ image_stem | append: '-1400.webp' | relative_url }} 1400w"
              sizes="(max-width: 380px) 90vw, (max-width: 680px) 45vw, 340px">
          {% endif %}
          <img src="{{ image_path | relative_url }}" alt="{{ photo.alt | escape }}" width="{{ photo.width }}" height="{{ photo.height }}" loading="lazy" decoding="async">
        </picture>
      </a>
      <figcaption lang="zh-Hans">
        <span class="photo-title">{{ photo.title }}</span>
      </figcaption>
    </figure>
  {% endfor %}
</div>
