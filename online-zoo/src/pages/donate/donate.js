import '../../assets/styles/donate.scss';
import '../../scripts/logoAsLink';
import '../../scripts/footerForm';
import pastHamburgerAndSlideMenuEvent from '../../scripts/hamburgerEvent';
import '../../scripts/peekAndFeedFriendAmountForm';

const NAV_ITEMS = [
  { text: 'About', path: './main.html', type: 'inactive' },
  { text: 'Map', path: '#', type: 'inactive' },
  { text: 'Zoos', path: '#' },
  { text: 'Donate', path: '#', type: 'active' },
  { text: 'Contact us', path: '#', type: 'inactive' }];
pastHamburgerAndSlideMenuEvent(NAV_ITEMS);
