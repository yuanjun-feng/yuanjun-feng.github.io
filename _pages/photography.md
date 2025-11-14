---
layout: page
permalink: /photography/
title: Photography Gallery
description: A collection of my photography work
nav: true
nav_order: 4
images:
  photoswipe: true
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    {% if page.description %}
      <p class="post-description">{{ page.description }}</p>
    {% endif %}
  </header>

  <article>
    <div class="pswp-gallery pswp-gallery--single-column" id="gallery--photography">
      <!-- Add your photography images here -->
      <!-- Example format:
      <a href="assets/img/your-image-full.jpg"
        data-pswp-width="width-in-pixels"
        data-pswp-height="height-in-pixels"
        target="_blank">
        <img src="assets/img/your-image-thumb.jpg" alt="Description" />
      </a>
      -->
      
      <!-- You can organize images in rows using Bootstrap grid -->
      <div class="row mt-3">
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/1.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/1.jpg" alt="Photography 1" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/2.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/2.jpg" alt="Photography 2" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/3.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/3.jpg" alt="Photography 3" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/4.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/4.jpg" alt="Photography 4" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/5.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/5.jpg" alt="Photography 5" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/6.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/6.jpg" alt="Photography 6" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/7.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/7.jpg" alt="Photography 7" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/8.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/8.jpg" alt="Photography 8" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/9.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/9.jpg" alt="Photography 9" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/10.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/10.jpg" alt="Photography 10" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/11.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/11.jpg" alt="Photography 11" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          <a href="assets/img/12.jpg"
            data-pswp-width="2000"
            data-pswp-height="1500"
            target="_blank">
            <img src="assets/img/12.jpg" alt="Photography 12" class="img-fluid rounded z-depth-1" />
          </a>
        </div>
      </div>
    </div>
  </article>
</div>

