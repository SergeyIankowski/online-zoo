import '../../assets/styles/main.scss';
const LOGOS = document.querySelectorAll('.logo');
LOGOS.forEach(logo => logo.addEventListener('click', () => window.open('./main.html', '_self').focus()));

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

let width640 = window.matchMedia('(max-width: 999px)');
const CARDS = document.querySelectorAll('.pet-card');
const deleteExtraCards = (x) => {
  if (x.matches) {
    CARDS[CARDS.length - 1].style.display = 'none';
    CARDS[CARDS.length - 2].style.display = 'none';
  } else {
    CARDS[CARDS.length - 1].style.display = 'flex';
    CARDS[CARDS.length - 2].style.display = 'flex';
  }
}
deleteExtraCards(width640);
width640.addEventListener('change', () => deleteExtraCards(width640));

const TESTIMONIALS__SCROLLBAR = document.querySelector('.testimonials__scrollbar');