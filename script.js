// ===== Typewriter Animation =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        typeWriter(typewriterElement, 'Future Computer Science Engineer', 80);
    }
    
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===== Theme Toggle (Light/Dark Mode) =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    // Save theme preference
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// ===== Scroll Progress Bar =====
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// ===== Smooth Scroll Navigation =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        const menuOverlay = document.getElementById('menu-overlay');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            mobileMenuBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
    }
}

// ===== Header Scroll Effect =====
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Scroll to Top Button =====
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');
const menuOverlay = document.getElementById('menu-overlay');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('open');
        mobileMenuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
}

// Close mobile menu when clicking overlay
if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
        nav.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnMenuBtn && nav.classList.contains('open')) {
        nav.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
    }
});

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Display success message
        formStatus.textContent = 'Message sent! I will contact you soon.';
        formStatus.classList.add('show', 'success');
        formStatus.classList.remove('error');
        
        // Reset form after 3 seconds
        setTimeout(function() {
            formStatus.classList.remove('show');
            contactForm.reset();
        }, 3000);
        
        // Here you could integrate with a backend service or EmailJS
        console.log('Form submitted:', formData);
    });
}

// ===== Set Current Year in Footer =====
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe cards and items
    const cards = document.querySelectorAll('.education-card, .skill-category, .highlight-item, .timeline-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===== Active Navigation Link =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', function() {
//     const heroName = document.querySelector('.hero-name');
//     if (heroName) {
//         const originalText = heroName.textContent;
//         typeWriter(heroName, originalText, 100);
//     }
// });

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.about, .experience, .education, .skills, .contact');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealOnScroll.observe(element);
});

console.log('Portfolio loaded successfully!');
