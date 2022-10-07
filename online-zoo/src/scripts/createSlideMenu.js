export default function createSlideMenu(navigationItems) {
  const SLIDE_MENU = document.createElement('div');
  SLIDE_MENU.classList.add('slide-menu');

  const NAVIGATION = document.createElement('nav');
  NAVIGATION.classList.add('navigation', 'slide-menu__navigation');

  const NAVIGATION_LIST = document.createElement('ul');
  NAVIGATION_LIST.classList.add('navigation__list', 'slide-menu__navigation-list', 'layout-horizontal');

  const createNavItems = (navItems) => {
    const NAV_ITEMS_FRAGMENT = document.createDocumentFragment();

    navItems.forEach((navItem) => {
      const NAVIGATION_ITEM = document.createElement('li');
      NAVIGATION_ITEM.classList.add('navigation__item');

      if (navItem.type === 'inactive') {
        const NAVIGATION_LINK = document.createElement('a');
        NAVIGATION_LINK.classList.add('link', 'navigation__link', 'slide-menu__link');
        NAVIGATION_LINK.href = navItem.path;
        NAVIGATION_LINK.innerText = navItem.text;
        NAVIGATION_ITEM.append(NAVIGATION_LINK);

        NAV_ITEMS_FRAGMENT.append(NAVIGATION_ITEM);
      } if (navItem.type === 'active') {
        const NAVIGATION_LINK = document.createElement('p');
        NAVIGATION_LINK.classList.add('link', 'navigation__link', 'slide-menu__link', 'slide-menu__link_active');
        NAVIGATION_LINK.innerText = navItem.text;
        NAVIGATION_ITEM.append(NAVIGATION_LINK);

        NAV_ITEMS_FRAGMENT.append(NAVIGATION_ITEM);
      }
    });

    return NAV_ITEMS_FRAGMENT;
  };
  NAVIGATION_LIST.append(createNavItems(navigationItems));
  NAVIGATION.append(NAVIGATION_LIST);
  SLIDE_MENU.append(NAVIGATION);

  return SLIDE_MENU;
}
