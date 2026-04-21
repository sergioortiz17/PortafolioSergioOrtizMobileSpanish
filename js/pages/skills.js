import { skills } from '../data/portfolio.js';
import { render as renderSkills } from '../components/skills.js';
import { initScrollAnimations, initNavScroll } from '../utils/animations.js';
import { renderNav, renderFooter } from '../utils/nav.js';
import { qs } from '../utils/dom.js';

const init = () => {
  renderNav('Skills');
  renderSkills(qs('#skills'), { skills });
  renderFooter();
  initScrollAnimations();
  initNavScroll();
};

init();
