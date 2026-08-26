/* ============================================================
   main.js — Theme toggle, language toggle, navbar state,
   mobile nav, scroll reveals, counters, academics tabs.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const body = document.body;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     THEME TOGGLE (light / dark, persisted)
     ============================================================ */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('.toggle-icon') : null;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('gss-theme', theme);
    if (themeToggle) themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  const savedTheme = localStorage.getItem('gss-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ============================================================
     LANGUAGE TOGGLE (English / Urdu, persisted)
     ============================================================ */
  const langToggle = document.getElementById('lang-toggle');

  function setLanguage(lang) {
    applyTranslations(lang); // defined in i18n.js
    localStorage.setItem('gss-lang', lang);
  }

  const savedLang = localStorage.getItem('gss-lang') || 'en';
  setLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current = localStorage.getItem('gss-lang') || 'en';
      setLanguage(current === 'en' ? 'ur' : 'en');
    });
  }

  /* ============================================================
     NAVBAR — solid on scroll
     ============================================================ */
  const navbar = document.getElementById('navbar');
  function updateNavbarState() {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  updateNavbarState();
  window.addEventListener('scroll', updateNavbarState, { passive: true });

  /* ============================================================
     MOBILE NAV DRAWER
     ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');

  function closeDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }

  function openDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });
    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
        closeDrawer();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
        hamburger.focus();
      }
    });
  }

  /* ============================================================
     SCROLL REVEALS (IntersectionObserver)
     ============================================================ */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ============================================================
     ANIMATED COUNTERS
     ============================================================ */
  const counters = document.querySelectorAll('.stat-number');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (counters.length) {
    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
    } else {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  /* ============================================================
     ACADEMICS TABS
     ============================================================ */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(btn) {
    const target = btn.getAttribute('data-tab');

    tabButtons.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    btn.focus();

    tabPanels.forEach((panel) => {
      if (panel.getAttribute('data-panel') === target) {
        panel.classList.add('is-active');
        panel.hidden = false;
      } else {
        panel.classList.remove('is-active');
        panel.hidden = true;
      }
    });
  }

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => activateTab(btn));

    // Arrow-key navigation per the standard ARIA tabs pattern.
    // Direction flips in RTL so the key still matches the visual side.
    btn.addEventListener('keydown', (e) => {
      const isRTL = document.body.getAttribute('dir') === 'rtl';
      const forwardKey = isRTL ? 'ArrowLeft' : 'ArrowRight';
      const backwardKey = isRTL ? 'ArrowRight' : 'ArrowLeft';
      let newIndex = null;
      if (e.key === forwardKey) newIndex = (index + 1) % tabButtons.length;
      if (e.key === backwardKey) newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      if (newIndex !== null) {
        e.preventDefault();
        activateTab(tabButtons[newIndex]);
      }
    });
  });

  /* ============================================================
     CONTACT FORM (front-end only — no backend)
     Builds a mailto: link from the filled-in fields since there
     is no server to submit to.
     ============================================================ */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#cf-name').value.trim();
      const email = contactForm.querySelector('#cf-email').value.trim();
      const message = contactForm.querySelector('#cf-msg').value.trim();

      const subject = encodeURIComponent(`Enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:thegeniuslearningzone@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
