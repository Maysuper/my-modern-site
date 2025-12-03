// NAV TOGGLE (mobile)
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
}

// Secondary toggle duplicates for other pages
const navToggle2 = document.getElementById('nav-toggle-2');
const mainNav2 = document.getElementById('main-nav-2');
if (navToggle2 && mainNav2) {
  navToggle2.addEventListener('click', () => mainNav2.classList.toggle('open'));
}

// THEME (dark / light) with localStorage
const themeToggle = document.getElementById('theme-toggle');
const themeToggle2 = document.getElementById('theme-toggle-2');
function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('cloudx-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('cloudx-theme', 'light');
  }
}
(function initTheme(){
  const saved = localStorage.getItem('cloudx-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved ? saved === 'dark' : prefersDark);
})();
if (themeToggle) themeToggle.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));
if (themeToggle2) themeToggle2.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('dark')));

// REVEAL ON SCROLL (IntersectionObserver)
const faders = document.querySelectorAll('.fade-in');
const obsOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, obsOptions);
faders.forEach(el => observer.observe(el));

// ACCORDION FAQ
document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = btn.nextElementSibling;
    const open = next.style.display === 'block';
    document.querySelectorAll('.accordion-panel').forEach(p => p.style.display = 'none');
    if (!open) next.style.display = 'block';
  });
});

// CONTACT FORM: optional JS to show a message after Formspree submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Let the browser submit to Formspree; show a friendly message
    setTimeout(() => {
      alert('Thanks! Your message was sent. We will contact you shortly.');
    }, 250);
  });
}
