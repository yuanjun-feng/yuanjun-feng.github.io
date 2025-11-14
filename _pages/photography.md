---
layout: page
permalink: /photography/
title: Photography
description: A collection of my photography work
nav: true
nav_order: 4
images:
  photoswipe: true
---

<div class="pswp-gallery pswp-gallery--single-column" id="gallery--photography">
  <!-- Photography Gallery -->
  
  <!-- Row 1: 3 vertical photos -->
  <div class="row mt-3">
    <div class="col-sm-4 mt-3 mt-md-0">
      <div class="photo-container vertical">
        <a href="{{ '/assets/img/photography/1000006947.JPG' | relative_url }}"
          data-pswp-width="3060"
          data-pswp-height="4080"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000006947.JPG' | relative_url }}" alt="Photography 1" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
      <div class="photo-container vertical">
        <a href="{{ '/assets/img/photography/1000011576.JPG' | relative_url }}"
          data-pswp-width="3712"
          data-pswp-height="5568"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000011576.JPG' | relative_url }}" alt="Photography 4" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
      <div class="photo-container vertical">
        <a href="{{ '/assets/img/photography/1000011579.JPG' | relative_url }}"
          data-pswp-width="3582"
          data-pswp-height="5373"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000011579.JPG' | relative_url }}" alt="Photography 5" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
  </div>

  <!-- Row 2: 2 vertical photos -->
  <div class="row mt-3">
    <div class="col-sm-4 mt-3 mt-md-0">
      <div class="photo-container vertical">
        <a href="{{ '/assets/img/photography/1000015056.JPG' | relative_url }}"
          data-pswp-width="3072"
          data-pswp-height="4096"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000015056.JPG' | relative_url }}" alt="Photography 6" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
      <div class="photo-container vertical">
        <a href="{{ '/assets/img/photography/1000022009.JPG' | relative_url }}"
          data-pswp-width="3712"
          data-pswp-height="5568"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000022009.JPG' | relative_url }}" alt="Photography 7" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
  </div>

  <!-- Row 3: 2 horizontal photos -->
  <div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
      <div class="photo-container horizontal">
        <a href="{{ '/assets/img/photography/1000006952.JPG' | relative_url }}"
          data-pswp-width="4080"
          data-pswp-height="3060"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000006952.JPG' | relative_url }}" alt="Photography 2" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
      <div class="photo-container horizontal">
        <a href="{{ '/assets/img/photography/1000006979.JPG' | relative_url }}"
          data-pswp-width="3866"
          data-pswp-height="2900"
          target="_blank">
          <img src="{{ '/assets/img/photography/1000006979.JPG' | relative_url }}" alt="Photography 3" class="img-fluid rounded z-depth-1" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
.photo-container {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.25rem;
}

.photo-container a {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.photo-container img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

/* Vertical photos - fixed height, all same size */
.photo-container.vertical {
  height: 500px;
}

/* Horizontal photos - fixed height, all same size */
.photo-container.horizontal {
  height: 400px;
}

.photo-container:hover img {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .photo-container.vertical {
    height: 400px;
  }
  .photo-container.horizontal {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .photo-container.vertical {
    height: 550px;
  }
  .photo-container.horizontal {
    height: 450px;
  }
}

@media (min-width: 992px) {
  .photo-container.vertical {
    height: 600px;
  }
  .photo-container.horizontal {
    height: 500px;
  }
}
</style>

<script>
(function() {
  // Ensure orientation classes are applied (backup in case CSS doesn't load)
  function ensureOrientation() {
    const verticalContainers = document.querySelectorAll('.photo-container.vertical');
    const horizontalContainers = document.querySelectorAll('.photo-container.horizontal');
    
    verticalContainers.forEach(container => {
      if (!container.classList.contains('vertical')) {
        container.classList.add('vertical');
      }
    });
    
    horizontalContainers.forEach(container => {
      if (!container.classList.contains('horizontal')) {
        container.classList.add('horizontal');
      }
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureOrientation);
  } else {
    ensureOrientation();
  }
})();
</script>
