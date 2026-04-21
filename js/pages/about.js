import { aboutParagraphs, education } from '../data/portfolio.js';
import { render as renderAbout } from '../components/about.js';
import { render as renderEducation } from '../components/education.js';
import { initScrollAnimations, initNavScroll } from '../utils/animations.js';
import { renderNav, renderFooter } from '../utils/nav.js';
import { qs } from '../utils/dom.js';

const init = () => {
  renderNav('About');
  renderAbout(qs('#about'), { aboutParagraphs });
  renderEducation(qs('#education'), { education });
  renderFooter();
  initScrollAnimations();
  initNavScroll();
};

init();
