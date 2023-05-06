const ANOTHER_AMOUNT_INPUT = document.querySelector('.another-amount__input');
const CHOISE_DONATION_RADIOS = document.querySelectorAll('.choice-donation-form__fix-amount-radio');

const fixAmounts = [5000, 2000, 1000, 500, 250, 100, 50, 25];
let checkedRadio;

ANOTHER_AMOUNT_INPUT.addEventListener('input', (e) => {
  // add max 4 digit length functionality
  if (e.target.value.length > 4) {
    alert('You can enter a maximum of four-digit number now');
    e.target.value = e.target.value.slice(0, 4);
  }

  if (fixAmounts.includes(+e.target.value)) {
    const index = fixAmounts.indexOf(+e.target.value);
    CHOISE_DONATION_RADIOS[index].checked = true;
    checkedRadio = CHOISE_DONATION_RADIOS[index];
  } else {
    checkedRadio.checked = false;
  }
});

CHOISE_DONATION_RADIOS.forEach((radio) => radio.addEventListener('click', (e) => {
  ANOTHER_AMOUNT_INPUT.value = e.target.id.slice(4);
}));
// CHOISE_DONATION_RADIOS[5].checked = true;
// eslint-disable-next-line prefer-destructuring
checkedRadio = CHOISE_DONATION_RADIOS[5];
CHOISE_DONATION_RADIOS[5].click();
