import '../../assets/styles/main.scss';

import '../../scripts/logoAsLink';
import pastHamburgerAndSlideMenuEvent from '../../scripts/hamburgerEvent';
import '../../scripts/footerForm';
import '../../scripts/numberOfCardsMainPage';
import '../../scripts/appendTestimonialsToPage';
import '../../scripts/testimonialsScrollbar';

const NAV_ITEMS = [
  { text: 'About', path: '#', type: 'active' },
  { text: 'Map', path: '#', type: 'inactive' },
  { text: 'Zoos', path: '#' },
  { text: 'Donate', path: './donate.html', type: 'inactive' },
  { text: 'Contact us', path: '#', type: 'inactive' }];
pastHamburgerAndSlideMenuEvent(NAV_ITEMS);
