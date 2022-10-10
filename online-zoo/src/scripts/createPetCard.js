export default function createPetCard({
  id, title, areal, photoPath, feedPath,
}) {
  const PET_CARD = document.createElement('div');
  PET_CARD.classList.add('pet-card', 'layout-vertical');
  PET_CARD.dataset.petCardId = id;

  const PET_CARD_IMAGE = document.createElement('img');
  PET_CARD_IMAGE.classList.add('pet-card__image');
  PET_CARD_IMAGE.src = photoPath;
  PET_CARD_IMAGE.alt = title;

  const PET_CARD_DESCRIPTION = document.createElement('div');
  PET_CARD_DESCRIPTION.classList.add('pet-card__description');

  const PET_CARD_TITLE = document.createElement('h5');
  PET_CARD_TITLE.classList.add('pet-card__title');
  PET_CARD_TITLE.innerText = title;

  const PET_CARD_AREAL = document.createElement('p');
  PET_CARD_AREAL.classList.add('pet-card__areal');
  PET_CARD_AREAL.innerText = areal;

  const PET_CARD_FEED_ICON = document.createElement('img');
  PET_CARD_FEED_ICON.classList.add('pet-cart__feed-icon');
  PET_CARD_FEED_ICON.src = feedPath;
  PET_CARD_FEED_ICON.alt = 'feed icon';

  PET_CARD_DESCRIPTION.append(PET_CARD_TITLE, PET_CARD_FEED_ICON, PET_CARD_AREAL);
  PET_CARD.append(PET_CARD_IMAGE, PET_CARD_DESCRIPTION);

  return PET_CARD;
}
