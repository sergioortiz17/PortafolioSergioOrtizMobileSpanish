import { initScrollAnimations, initNavScroll } from '../utils/animations.js';
import { renderNav, renderFooter } from '../utils/nav.js';

const init = () => {
  renderNav('CV');
  renderFooter();
  initScrollAnimations();
  initNavScroll();
};

init();
