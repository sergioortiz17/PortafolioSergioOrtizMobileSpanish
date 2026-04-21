import { projects } from '../data/portfolio.js';
import { render as renderProjects } from '../components/projects.js';
import { initScrollAnimations, initNavScroll } from '../utils/animations.js';
import { renderNav, renderFooter } from '../utils/nav.js';
import { qs } from '../utils/dom.js';

const init = () => {
  renderNav('Projects');
  renderProjects(qs('#projects'), { projects });
  renderFooter();
  initScrollAnimations();
  initNavScroll();
};

init();
