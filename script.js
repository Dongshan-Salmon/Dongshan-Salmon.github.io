// Initialize AOS scroll animations
AOS.init({
  once: true,
  duration: 900,
  easing: 'ease-out-cubic'
});

// Typed.js for hero title
const typed = new Typed('#hero-title', {
  strings: [
    'Dongshan Salmon',
    'Front-end Engineer',
    'UI/UX Motion Designer'
  ],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 2200,
  loop: true
});

// GSAP hero intro timeline
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.from('.navbar', { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from('.hero .greeting', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from('.hero-title', { opacity: 0, y: 20, duration: 0.8 }, '-=0.35')
    .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
    .from('.hero-buttons .btn', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');
});

// Particles.js background
particlesJS('particles-js', {
  particles: {
    number: { value: 75, density: { enable: true, value_area: 1000 } },
    color: { value: ['#5d5fef', '#8a2be2', '#ffffff'] },
    shape: { type: 'circle' },
    opacity: { value: 0.4, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#5d5fef',
      opacity: 0.35,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: 'none',
      random: true,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const toggleNavbar = () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', toggleNavbar);
toggleNavbar();

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax effect based on mouse movement
const parallaxElements = document.querySelectorAll('[data-depth]');
window.addEventListener('mousemove', (event) => {
  const { innerWidth, innerHeight } = window;
  const mouseX = (event.clientX - innerWidth / 2) / innerWidth;
  const mouseY = (event.clientY - innerHeight / 2) / innerHeight;

  parallaxElements.forEach((el) => {
    const depth = parseFloat(el.dataset.depth) || 0;
    const moveX = mouseX * depth * 30;
    const moveY = mouseY * depth * 30;
    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
});

// Portfolio modal interactions
const modalTriggers = document.querySelectorAll('.portfolio-card');
const modals = document.querySelectorAll('.modal');
const body = document.body;

const closeModals = () => {
  modals.forEach((modal) => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });
  body.style.overflow = '';
};

modalTriggers.forEach((card) => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('modal-close')) {
      closeModals();
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModals();
  }
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();
