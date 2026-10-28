document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('navMenu');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
});
