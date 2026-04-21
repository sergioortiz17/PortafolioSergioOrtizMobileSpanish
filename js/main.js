import { heroTags, journey, certifications } from './data/portfolio.js';
import { render as renderHero }           from './components/hero.js';
import { render as renderJourney }        from './components/journey.js';
import { render as renderCertifications } from './components/certifications.js';
import { render as renderContact }        from './components/contact.js';
import { initScrollAnimations, initNavScroll } from './utils/animations.js';
import { renderNav, renderFooter } from './utils/nav.js';
import { qs } from './utils/dom.js';
import { personal } from './data/portfolio.js';

const init = () => {
  renderNav('Home');
  renderHero(qs('#hero'),                     { personal, heroTags });
  renderJourney(qs('#journey'),               { journey });
  renderCertifications(qs('#certifications'), { certifications });
  renderContact(qs('#contact'),               { personal });
  renderFooter();

  initScrollAnimations();
  initNavScroll();
};

init();
