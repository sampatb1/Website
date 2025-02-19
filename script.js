// Wait for DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', () => {
  // GSAP Animations for Hero Section
  gsap.from('.hero-content h1', { duration: 1, opacity: 0, y: -50 });
  gsap.from('.hero-content p', { duration: 1, opacity: 0, y: 50, delay: 0.5 });

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Custom Cursor Glow Effect
  const cursorGlow = document.querySelector('.cursor-glow');
  document.addEventListener('mousemove', (e) => {
    // Smoothly update the position of the glow element
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
