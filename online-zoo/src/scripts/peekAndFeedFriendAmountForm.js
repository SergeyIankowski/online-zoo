const ANOTHER_AMOUNT_INPUT = document.querySelector('.another-amount__input');
const CHOISE_DONATION_RADIOS = document.querySelectorAll('.choice-donation-form__fix-amount-radio');

ANOTHER_AMOUNT_INPUT.addEventListener('input', (e) => {
  console.log(typeof e.target.value);
  if (e.target.value.length > 4) {
    alert('You can enter a maximum of four-digit number now');
    e.target.value = e.target.value.slice(0, 4);
  }
});

CHOISE_DONATION_RADIOS.forEach((radio) => radio.addEventListener('change', (e) => {
  if (e.target.checked) {
    e.target.setAttribute('checked', '');
  }
}));

// const checkRadioButton = () => {

// };
