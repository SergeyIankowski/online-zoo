import createPetCard from './createPetCard';

export default function createPetCardsSlide(data, amount, status) {
  const slide = document.createElement('div');
  slide.classList.add('layout-3-column', 'animal-cards__slide', `${status}`);
  const arrayOfNumbers = data.map((item, index) => index + 1);
  const shuffledArray = arrayOfNumbers.sort(() => Math.random() - 0.5);

  const findItemWithIndex = (id, dataArr) => dataArr.find((item) => item.id === id);
  // eslint-disable-next-line no-plusplus
  for (let number = 0; number < amount; number++) {
    const petCardObj = findItemWithIndex(shuffledArray[number], data);
    const petCard = createPetCard(petCardObj);
    slide.append(petCard);
  }

  return slide;
}
