import { personal } from '../data/portfolio.js';

const NAV_LINKS = [
  { label: 'Home',     href: 'index.html' },
  { label: 'About',    href: 'about.html' },
  { label: 'Skills',   href: 'skills.html' },
  { label: 'Projects', href: 'projects.html' },
  { label: 'CV',       href: 'cv.html' },
  { label: 'Contact',  href: 'index.html#contact', cta: true },
];

export const renderNav = (activePage) => {
  const nav = document.querySelector('#nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">sergio.ortiz</a>
    <ul class="nav-links">
      ${NAV_LINKS.map(({ label, href, cta }) => {
        const isActive = label === activePage;
        const cls = cta ? 'nav-cta' : isActive ? 'nav-active' : '';
        return `<li><a href="${href}"${cls ? ` class="${cls}"` : ''}>${label}</a></li>`;
      }).join('')}
    </ul>
  `;
};

export const renderFooter = () => {
  const footer = document.querySelector('#footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <p class="footer-copy">© 2025 Sergio Ortiz · Designed &amp; Built with ❤️</p>
      <div class="footer-links">
        <a href="${personal.github}" target="_blank">GitHub</a>
        <a href="${personal.linkedin}" target="_blank">LinkedIn</a>
        <a href="mailto:${personal.email}">Email</a>
      </div>
    </div>
  `;
};
