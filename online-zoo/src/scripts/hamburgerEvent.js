import createSlideMenu from './createSlideMenu';

export default function pastHamburgerAndSlideMenuEvent(slideMenuItems) {
  const HEADER_LAYOUT = document.querySelector('.header__layout');
  const LOGO = document.querySelector('.logo');
  const HAMBURGER = document.querySelector('.hamburger');

  const SLIDE_MENU = createSlideMenu(slideMenuItems);
  const HAMBURGER_OVERLAY = document.createElement('div');
  HAMBURGER_OVERLAY.classList.add('hamburger__overlay');

  const handleSlideMenuEvent = () => {
    HEADER_LAYOUT.classList.toggle('header__layout_hamburger-active');

    LOGO.classList.toggle('logo_active');

    HAMBURGER.classList.toggle('hamburger_inactive');
    HAMBURGER.classList.toggle('hamburger_active');
    if (HAMBURGER.classList.contains('hamburger_active')) {
      HEADER_LAYOUT.append(SLIDE_MENU);
      HEADER_LAYOUT.append(HAMBURGER_OVERLAY);
    }

    if (HAMBURGER.classList.contains('hamburger_inactive')) {
      document.querySelector('.slide-menu').remove();
      document.querySelector('.hamburger__overlay').remove();
    }
  };
  HAMBURGER.addEventListener('click', handleSlideMenuEvent);
  HAMBURGER_OVERLAY.addEventListener('click', handleSlideMenuEvent);
}
