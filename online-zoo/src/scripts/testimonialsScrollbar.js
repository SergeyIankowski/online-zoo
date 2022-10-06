const TESTIMONIALS__SCROLLBAR = document.querySelector('.testimonials__scrollbar');
const TESTIMONIALS__SLIDE_CONTAINER = document.querySelector('.testimonials__slide-container');
const TESTIMONIALS__SLIDE_CONTAINER_ELEMENTS = TESTIMONIALS__SLIDE_CONTAINER.children;
let hiddenElements;

TESTIMONIALS__SCROLLBAR.value = 0;

const width1000 = window.matchMedia('(max-width: 1599px)');
const calculateHiddenElements = (x) => {
  if (x.matches) {
    hiddenElements = TESTIMONIALS__SLIDE_CONTAINER_ELEMENTS.length - 3;
  } else {
    hiddenElements = TESTIMONIALS__SLIDE_CONTAINER_ELEMENTS.length - 4;
  }
};
calculateHiddenElements(width1000);
TESTIMONIALS__SCROLLBAR.max = hiddenElements;
width1000.addEventListener('change', () => {
  calculateHiddenElements(width1000);
  TESTIMONIALS__SCROLLBAR.max = hiddenElements;
});

TESTIMONIALS__SCROLLBAR.addEventListener('input', (e) => {
  TESTIMONIALS__SLIDE_CONTAINER.style.left = `${-298 * e.target.value}px`;
});
