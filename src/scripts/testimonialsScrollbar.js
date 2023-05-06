const TESTIMONIALS_SCROLLBAR = document.querySelector('.testimonials__scrollbar');
const TESTIMONIALS_SLIDE_CONTAINER = document.querySelector('.testimonials__slide-container');
const TESTIMONIALS_SLIDE_CONTAINER_ELEMENTS = TESTIMONIALS_SLIDE_CONTAINER.children;
let hiddenElements;
let scrollLength;
TESTIMONIALS_SCROLLBAR.value = 0;

const width1000 = window.matchMedia('(max-width: 1599px)');
const calculateHiddenElements = (x) => {
  if (x.matches) {
    hiddenElements = TESTIMONIALS_SLIDE_CONTAINER_ELEMENTS.length - 3;
    scrollLength = 323;
  } else {
    hiddenElements = TESTIMONIALS_SLIDE_CONTAINER_ELEMENTS.length - 4;
    scrollLength = 298;
  }
};
calculateHiddenElements(width1000);
TESTIMONIALS_SCROLLBAR.max = hiddenElements;
width1000.addEventListener('change', () => {
  calculateHiddenElements(width1000);
  TESTIMONIALS_SCROLLBAR.max = hiddenElements;
});

TESTIMONIALS_SCROLLBAR.addEventListener('input', (e) => {
  TESTIMONIALS_SLIDE_CONTAINER.style.left = `${-scrollLength * e.target.value}px`;
});
