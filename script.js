// Light/Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Custom Cursor Effect
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
