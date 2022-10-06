const width640 = window.matchMedia('(max-width: 999px)');
const CARDS = document.querySelectorAll('.pet-card');
const deleteExtraCards = (x) => {
  if (x.matches) {
    CARDS[CARDS.length - 1].style.display = 'none';
    CARDS[CARDS.length - 2].style.display = 'none';
  } else {
    CARDS[CARDS.length - 1].style.display = 'flex';
    CARDS[CARDS.length - 2].style.display = 'flex';
  }
};
deleteExtraCards(width640);
width640.addEventListener('change', () => deleteExtraCards(width640));
