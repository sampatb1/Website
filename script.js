document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.documentElement; // Target <html> for class for better CSS variable inheritance
    const cursorGlow = document.querySelector('.cursor-glow');
    const navbar = document.getElementById('navbar');

    // --- Theme Toggle Functionality ---
    const iconLight = '<i class="fas fa-lightbulb"></i>';
    const iconDark = '<i class="fas fa-moon"></i>';

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark-theme') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleButton.innerHTML = iconDark;
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleButton.innerHTML = iconLight;
        }
    }

    // Load saved theme
    let currentTheme = localStorage.getItem('theme') || 'light-theme'; // Default to light
    applyTheme(currentTheme);

    // Event listener for theme toggle
    themeToggleButton.addEventListener('click', () => {
        currentTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });

    // --- Cursor Glow Effect ---
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            // Debounce or throttle this if performance issues arise on complex pages
            requestAnimationFrame(() => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            });
        });
         document.addEventListener('mousedown', () => {
            cursorGlow.style.width = '15px';
            cursorGlow.style.height = '15px';
        });
        document.addEventListener('mouseup', () => {
            cursorGlow.style.width = '25px'; /* Original size */
            cursorGlow.style.height = '25px'; /* Original size */
        });
    }

    // --- Smooth Scrolling for Nav Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Simple Scroll Animations (example for project cards) ---
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .experience-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Optional: stop observing once animated
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});
