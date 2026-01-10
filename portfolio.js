// ==========================================
// DOM ELEMENTS
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const typingText = document.getElementById('typing-text');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// DARK MODE TOGGLE
// ==========================================
// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================
// TYPING EFFECT
// ==========================================
const titles = [
    'Cloud Platform Engineer',
    'Kubernetes Expert',
    'DevOps Specialist',
    'Infrastructure Architect'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        // Pause at end before deleting
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);

// ==========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation
            if (entry.target.classList.contains('about-content')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ==========================================
// 3D SKILLS SPHERE
// ==========================================
function createSkillsSphere() {
    const sphere = document.getElementById('skillsSphere');
    if (!sphere) return;

    const skills = [
        // Core skills - large
        { name: 'Kubernetes', size: 'large' },
        { name: 'Docker', size: 'large' },
        { name: 'Go', size: 'large' },

        // Important skills - medium
        { name: 'OpenStack', size: 'medium' },
        { name: 'AWS', size: 'medium' },
        { name: 'Python', size: 'medium' },
        { name: 'Java', size: 'medium' },
        { name: 'GitLab CI/CD', size: 'medium' },
        { name: 'GitOps', size: 'medium' },
        { name: 'Terraform', size: 'medium' },
        { name: 'Kafka', size: 'medium' },
        { name: 'Oracle', size: 'medium' },
        { name: 'MySQL', size: 'medium' },

        // Other skills - small
        { name: 'Karmada', size: 'small' },
        { name: 'Cluster API', size: 'small' },
        { name: 'PostgreSQL', size: 'small' },
        { name: 'MariaDB', size: 'small' },
        { name: 'Linux', size: 'small' },
        { name: 'Ubuntu', size: 'small' },
        { name: 'RHEL', size: 'small' },
        { name: 'Shell Script', size: 'small' }
    ];

    // Responsive radius
    let radius = 250;
    if (window.innerWidth < 768) {
        radius = 175;
    } else if (window.innerWidth < 968) {
        radius = 200;
    }

    const total = skills.length;

    // Clear existing tags
    sphere.innerHTML = '';

    skills.forEach((skill, i) => {
        const tag = document.createElement('div');
        tag.className = `skill-tag size-${skill.size}`;
        tag.textContent = skill.name;

        // Fibonacci sphere distribution for better spacing
        const phi = Math.acos(-1 + (2 * i) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        tag.style.transform = transform;

        sphere.appendChild(tag);
    });
}

// Initialize skills sphere when page loads
window.addEventListener('load', createSkillsSphere);

// Recreate sphere on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createSkillsSphere, 250);
});

// ==========================================
// COUNTER ANIMATION
// ==========================================
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    });
}

// ==========================================
// PROJECT FILTERING
// ==========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                // Trigger fade in animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filter)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            }
        });
    });
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
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

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ==========================================
// PARALLAX EFFECT FOR HERO ORBS
// ==========================================
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ==========================================
// PRELOAD ANIMATION
// ==========================================
window.addEventListener('load', () => {
    // Add visible class to hero content after load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ==========================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ==========================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use debounced scroll handler
window.addEventListener('scroll', debounce(updateActiveNavLink, 10));

// ==========================================
// ADD CURSOR TRAIL EFFECT (Optional)
// ==========================================
document.addEventListener('mousemove', (e) => {
    // Create cursor trail element
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    document.body.appendChild(trail);

    // Remove trail after animation
    setTimeout(() => {
        trail.remove();
    }, 1000);
});

// Add CSS for cursor trail dynamically
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: cursorFade 1s ease-out forwards;
        z-index: 9999;
    }

    @keyframes cursorFade {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// CONSOLE MESSAGE (Easter Egg)
// ==========================================
console.log('%c👋 안녕하세요!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c이 포트폴리오가 마음에 드셨나요? 함께 일해요! 📧 010-3627-3982', 'font-size: 14px; color: #4a5568;');

// ==========================================
// KEYBOARD NAVIGATION (Accessibility)
// ==========================================
document.addEventListener('keydown', (e) => {
    // Press 'D' to toggle dark mode
    if (e.key === 'd' || e.key === 'D') {
        themeToggle.click();
    }

    // Press 'Esc' to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==========================================
// ADD LOADING ANIMATION
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }

    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--bg-primary);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(loadingStyle);