import createPopUp from './createPopUP';
import testimonials from './testimonialsData';

const testimonialsCards = document.querySelectorAll('.testimonial');
let popUpOpened = false;

const changeBodyScrollStatus = () => {
  if (popUpOpened) {
    document.body.classList.add('body_unscrolled');
  } else {
    document.body.classList.remove('body_unscrolled');
  }
};

const closePopUp = (e) => {
  if (e.target.classList.contains('popup__overlay') || e.target.classList.contains('popup__close-icon')) {
    document.querySelector('.popup').remove();
    popUpOpened = false;
    changeBodyScrollStatus();
  }
};

const showPopup = (id, data) => {
  const BODY = document.body;
  const currentTestimonial = data.find((item) => item.id === +id);
  const POPUP = createPopUp(currentTestimonial);
  popUpOpened = true;
  changeBodyScrollStatus();
  POPUP.addEventListener('click', closePopUp);
  BODY.append(POPUP);
};
testimonialsCards.forEach((testimonial) => testimonial.addEventListener('click', (e) => {
  const currentId = e.currentTarget.getAttribute('data-testimonial-id');
  showPopup(currentId, testimonials);
}));
