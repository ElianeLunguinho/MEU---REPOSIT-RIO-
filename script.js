
// ========================================
// Mobile Menu Toggle
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Scroll Animation (Intersection Observer)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation class to elements
document.querySelectorAll('.journey-card, .skill-category, .project-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class style dynamically
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========================================
// Theme Toggle (Light/Dark Mode)
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Update header shadow based on theme
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentTheme = html.getAttribute('data-theme');
    
    if (window.scrollY > 50) {
        if (currentTheme === 'dark') {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🚀 Portfolio Eliane Lunguinho', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%cDesenvolvido com ❤️ e JavaScript', 'font-size: 14px; color: #666;');
console.log('%cBem-vindo ao meu portfólio!', 'font-size: 14px; color: #00D9FF;');

