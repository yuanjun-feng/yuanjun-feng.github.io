---
layout: folio-page
permalink: /photography/
title: Photography
eyebrow: A different kind of observation
nav: true
nav_order: 4
photography_wall: true
---

<div class="photo-wall-toolbar">
  <button class="motion-toggle" type="button" data-motion-toggle hidden>Pause motion</button>
</div>

<section class="photo-wall" aria-label="Photography wall" data-photo-wall data-motion="paused">
  {% for column in (0..2) %}
    <div class="photo-wall-column">
      <div class="photo-wall-float">
        {% for photo in site.data.photographs %}
          {% assign photo_column = forloop.index0 | modulo: 3 %}
          {% if photo_column == column %}
            {% assign image_path = photo.file | prepend: '/assets/img/photography/' %}
            {% assign image_stem = photo.file | split: '.' | first | prepend: '/assets/img/photography/' %}
            <figure class="photo-frame">
              <a href="{{ image_path | relative_url }}" data-photo-link aria-label="View photograph: {{ photo.alt | escape }}">
                <picture>
                  {% if site.imagemagick.enabled %}
                    <source type="image/webp"
                      srcset="{{ image_stem | append: '-480.webp' | relative_url }} 480w, {{ image_stem | append: '-800.webp' | relative_url }} 800w, {{ image_stem | append: '-1400.webp' | relative_url }} 1400w"
                      sizes="(max-width: 580px) 90vw, (max-width: 950px) 30vw, 420px">
                  {% endif %}
                  <img src="{{ image_path | relative_url }}" alt="{{ photo.alt | escape }}" width="{{ photo.width }}" height="{{ photo.height }}" loading="lazy" decoding="async">
                </picture>
              </a>
            </figure>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</section>

<dialog class="photo-viewer" aria-label="Photograph viewer" data-photo-viewer>
  <div class="photo-viewer-top"><span>Photography</span><button type="button" data-photo-close autofocus>Close <span aria-hidden="true">×</span></button></div>
  <div class="photo-viewer-stage"><img data-photo-full alt=""></div>
  <div class="photo-viewer-controls">
    <button type="button" data-photo-previous aria-label="Previous photograph">← Previous</button>
    <p data-photo-count aria-live="polite" aria-atomic="true"></p>
    <button type="button" data-photo-next aria-label="Next photograph">Next →</button>
  </div>
</dialog>
