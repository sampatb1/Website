document.addEventListener('DOMContentLoaded', () => {
  // Animate hero elements for a dynamic entrance
  gsap.from('.hero-content h1', { duration: 1, opacity: 0, y: -50 });
  gsap.from('.hero-content p', { duration: 1, opacity: 0, y: 50, delay: 0.5 });
  gsap.from('.btn', { duration: 1, opacity: 0, scale: 0.5, delay: 1 });
});

