/* eslint-disable no-useless-escape */
const FOOTER_BUTTON = document.querySelector('.footer__subscribe-button');
const FOOTER_INPUT = document.querySelector('.footer__subscribe-input');

FOOTER_INPUT.oninput = (e) => {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (e.target.value.match(regExp)) {
    FOOTER_BUTTON.classList.remove('button_mistake');
  } else {
    FOOTER_BUTTON.classList.add('button_mistake');
  }
};
