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
