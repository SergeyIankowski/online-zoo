/* eslint-disable prefer-const */
import createPetCardsSlide from './createPetCardsSlide';
import petCards from './petCardsData';

const container = document.querySelector('.animal-cards__layout');
container.append(createPetCardsSlide(petCards, 6, 'prev'));
container.append(createPetCardsSlide(petCards, 6, 'active'));
container.append(createPetCardsSlide(petCards, 6, 'next'));

let prevSlide = document.querySelector('.animal-cards__slide.prev');
let activeSlide = document.querySelector('.animal-cards__slide.active');
let nextSlide = document.querySelector('.animal-cards__slide.next');

const leftButton = document.querySelector('.animal-cards__button-left-arrow');
const rightButton = document.querySelector('.animal-cards__button-right-arrow');

let isEnabled = false;
const width640 = window.matchMedia('(max-width: 999px)');
const deleteExtraCards = (x) => {
  if (x.matches) {
    const CARDS = document.querySelectorAll('.pet-card');
    CARDS[4].style.display = 'none';
    CARDS[5].style.display = 'none';
    CARDS[10].style.display = 'none';
    CARDS[11].style.display = 'none';
    CARDS[16].style.display = 'none';
    CARDS[17].style.display = 'none';
  } else {
    const CARDS = document.querySelectorAll('.pet-card');
    CARDS[4].style.display = 'flex';
    CARDS[5].style.display = 'flex';
    CARDS[10].style.display = 'flex';
    CARDS[11].style.display = 'flex';
    CARDS[16].style.display = 'flex';
    CARDS[17].style.display = 'flex';
  }
};
deleteExtraCards(width640);
width640.addEventListener('change', () => {
  deleteExtraCards(width640);
});

leftButton.addEventListener('click', (e) => {
  if (isEnabled === true) {
    e.preventDefault();
    return;
  }
  prevSlide.classList.add('from-left');
  activeSlide.classList.add('to-right');
  isEnabled = true;
  activeSlide.addEventListener('animationend', () => {
    activeSlide.remove();
    prevSlide.classList.remove('from-left', 'prev');
    prevSlide.classList.add('active');
    activeSlide = prevSlide;
    container.prepend(createPetCardsSlide(petCards, 6, 'prev'));
    deleteExtraCards(width640);
    prevSlide = document.querySelector('.animal-cards__slide.prev');
    isEnabled = false;
  });
});
rightButton.addEventListener('click', (e) => {
  if (isEnabled === true) {
    e.preventDefault();
    return;
  }
  activeSlide.classList.add('to-left');
  nextSlide.classList.add('from-right');
  isEnabled = true;
  activeSlide.addEventListener('animationend', () => {
    activeSlide.remove();
    nextSlide.classList.remove('from-right', 'next');
    nextSlide.classList.add('active');
    activeSlide = nextSlide;
    container.append(createPetCardsSlide(petCards, 6, 'next'));
    deleteExtraCards(width640);
    nextSlide = document.querySelector('.animal-cards__slide.next');
    isEnabled = false;
  });
});
