// import * as defaultIcon from '../assets/icons/user_icon.svg';

export default function createTestimonialCard({
  id, name, icon, date, location, content,
}) {
  const TESTIMONIAL = document.createElement('div');
  TESTIMONIAL.classList.add('testimonial');
  TESTIMONIAL.dataset.testimonailId = id;

  const TESTIMONIAL_HEAD = document.createElement('div');
  TESTIMONIAL_HEAD.classList.add('testimonial__head');

  const TESTIMONIAL_PHOTO = document.createElement('img');
  TESTIMONIAL_PHOTO.classList.add('testimonial__photo');
  TESTIMONIAL_PHOTO.src = icon === null ? '../src/assets/icons/user_icon.svg' : icon;
  TESTIMONIAL_PHOTO.alt = 'testimonial photo';

  const TESTIMONIAL_TITLE = document.createElement('h5');
  TESTIMONIAL_TITLE.classList.add('testimonial__title');
  TESTIMONIAL_TITLE.innerText = name;

  const TESTIMONIAL_LOCATION = document.createElement('p');
  TESTIMONIAL_LOCATION.classList.add('testimonial__location');
  TESTIMONIAL_LOCATION.innerHTML = `${location}<span>•</span>${date}`;

  const TESTIMONIAL_DESCRIPTION = document.createElement('p');
  TESTIMONIAL_DESCRIPTION.classList.add('testimonial__description');
  TESTIMONIAL_DESCRIPTION.innerText = content;

  TESTIMONIAL_HEAD.append(TESTIMONIAL_PHOTO, TESTIMONIAL_TITLE, TESTIMONIAL_LOCATION);
  TESTIMONIAL.append(TESTIMONIAL_HEAD, TESTIMONIAL_DESCRIPTION);

  return TESTIMONIAL;
}
