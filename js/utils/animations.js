import { qs, qsa, on } from './dom.js';

export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  qsa('.fade-in, .timeline-item').forEach((el) => observer.observe(el));

  qsa('.skills-grid .skill-category, .projects-grid .project-card, .certs-grid .cert-card')
    .forEach((el, i) => { el.style.transitionDelay = `${i * 0.08}s`; });
};

export const initNavScroll = () => {
  const nav = qs('nav');
  on(window, 'scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(5,5,16,0.95)'
      : 'rgba(5,5,16,0.7)';
  });
};
