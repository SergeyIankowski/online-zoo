import '../../assets/styles/main.scss';

import '../../scripts/logoAsLink';
import pastHamburgerAndSlideMenuEvent from '../../scripts/hamburgerEvent';
import '../../scripts/footerForm';
import '../../scripts/animalCardsModule';
import '../../scripts/numberOfCardsMainPage';
import '../../scripts/appendTestimonialsToPage';
import '../../scripts/testimonialsScrollbar';
import '../../scripts/pastPopUpFunctionality';

const NAV_ITEMS = [
  { text: 'About', path: '#', type: 'active' },
  { text: 'Map', path: '#', type: 'inactive' },
  { text: 'Zoos', path: '#', type: 'inactive' },
  { text: 'Donate', path: './donate.html', type: 'inactive' },
  { text: 'Contact us', path: '#', type: 'inactive' },
  { text: 'Designed by ©', path: 'https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online', type: 'inactive' }];
pastHamburgerAndSlideMenuEvent(NAV_ITEMS);
