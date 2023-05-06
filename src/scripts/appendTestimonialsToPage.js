import createTestimonialCard from './createTestimonialCard';
import testimonials from './testimonialsData';

const TESTIMONIALS_SLIDE_CONTAINER = document.querySelector('.testimonials__slide-container');

testimonials.forEach(
  (testimonial) => TESTIMONIALS_SLIDE_CONTAINER.append(createTestimonialCard(testimonial)),
);
