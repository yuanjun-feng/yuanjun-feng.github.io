(() => {
  const wall = document.querySelector('[data-photo-wall]');
  if (!wall) return;

  const toggle = document.querySelector('[data-motion-toggle]');
  const columns = Array.from(wall.querySelectorAll('.photo-wall-column'));
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrowScreen = window.matchMedia('(max-width: 580px)');
  const viewer = document.querySelector('[data-photo-viewer]');
  let userPaused = false;
  let frame = null;
  let wallVisible = true;

  function motionEnabled() {
    return !userPaused && !preference.matches && !narrowScreen.matches && !document.hidden && !viewer.open && wallVisible;
  }

  function updateMotion() {
    wall.dataset.motion = motionEnabled() ? 'running' : 'paused';
    toggle.hidden = preference.matches || narrowScreen.matches;
    toggle.textContent = userPaused ? 'Play motion' : 'Pause motion';
    if (preference.matches || narrowScreen.matches) {
      columns.forEach(column => column.style.removeProperty('--photo-parallax'));
    }
  }

  function updateParallax() {
    frame = null;
    if (!motionEnabled()) return;
    const bounds = wall.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - bounds.top) / window.innerHeight));
    columns.forEach((column, index) => {
      const distance = index === 1 ? -24 : 16;
      column.style.setProperty('--photo-parallax', `${(progress * distance).toFixed(2)}px`);
    });
  }

  function scheduleParallax() {
    if (frame === null && motionEnabled()) frame = window.requestAnimationFrame(updateParallax);
  }

  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    updateMotion();
    scheduleParallax();
  });
  [preference, narrowScreen].forEach(query => query.addEventListener('change', () => {
    updateMotion();
    scheduleParallax();
  }));
  document.addEventListener('visibilitychange', updateMotion);
  window.addEventListener('scroll', scheduleParallax, { passive: true });
  window.addEventListener('resize', scheduleParallax);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      wallVisible = entries[0].isIntersecting;
      updateMotion();
      scheduleParallax();
    }).observe(wall);
  }
  updateMotion();
  scheduleParallax();

  // Without native dialog support, photographs keep their full-size image links.
  if (typeof viewer.showModal !== 'function') return;

  const links = Array.from(wall.querySelectorAll('[data-photo-link]'));
  const image = viewer.querySelector('[data-photo-full]');
  const count = viewer.querySelector('[data-photo-count]');
  let current = 0;
  let returnFocus = null;

  function showPhoto(index) {
    current = (index + links.length) % links.length;
    image.src = links[current].href;
    image.alt = links[current].querySelector('img').alt;
    count.textContent = `${current + 1} / ${links.length}`;
  }

  links.forEach((link, index) => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      returnFocus = link;
      showPhoto(index);
      viewer.showModal();
      document.documentElement.classList.add('photo-viewer-open');
      updateMotion();
    });
  });
  viewer.querySelector('[data-photo-close]').addEventListener('click', () => viewer.close());
  viewer.querySelector('[data-photo-previous]').addEventListener('click', () => showPhoto(current - 1));
  viewer.querySelector('[data-photo-next]').addEventListener('click', () => showPhoto(current + 1));
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('photo-viewer-open');
    if (returnFocus) returnFocus.focus({ preventScroll: true });
    updateMotion();
    scheduleParallax();
  });
})();
