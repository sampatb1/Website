document.addEventListener('DOMContentLoaded', () => {
  // Animate hero section content on load for a dynamic feel
  gsap.from('.hero-content h1', { duration: 1, opacity: 0, y: -50 });
  gsap.from('.hero-content p', { duration: 1, opacity: 0, y: 50, delay: 0.5 });
});
