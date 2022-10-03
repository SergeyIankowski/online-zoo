const LOGOS = document.querySelectorAll('.logo');
LOGOS.forEach(logo => logo.addEventListener('click', () => window.open('../main/index.html', '_self').focus()));

const FOOTER_BUTTON = document.querySelector('.footer__subscribe-button');
const FOOTER_INPUT = document.querySelector('.footer__subscribe-input');

FOOTER_INPUT.oninput = (e) => {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (e.target.value.match(regExp)) {
    FOOTER_BUTTON.classList.remove('button_mistake');
  } else {
    FOOTER_BUTTON.classList.add('button_mistake');
  }
}