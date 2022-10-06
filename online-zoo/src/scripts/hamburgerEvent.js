const HAMBURGER = document.querySelector('.hamburger');

HAMBURGER.addEventListener('click', () => {
  HAMBURGER.classList.toggle('hamburger_inactive');
  HAMBURGER.classList.toggle('hamburger_active');
});
