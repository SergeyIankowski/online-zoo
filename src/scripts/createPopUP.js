export default function createPopUp({
  id, name, icon, date, location, content,
}) {
  const POPUP = document.createElement('div');
  POPUP.classList.add('popup');
  POPUP.dataset.testimonailId = id;

  const POPUP_OVERLAY = document.createElement('div');
  POPUP_OVERLAY.classList.add('popup__overlay');

  const POPUP_BODY = document.createElement('div');
  POPUP_BODY.classList.add('popup__body');

  const POPUP_CLOSE_ICON = document.createElement('img');
  POPUP_CLOSE_ICON.src = '../src/assets/icons/close-icon.svg';
  POPUP_CLOSE_ICON.alt = 'close icon';
  POPUP_CLOSE_ICON.classList.add('popup__close-icon');

  const POPUP_HEAD = document.createElement('div');
  POPUP_HEAD.classList.add('popup__head');

  const POPUP_PHOTO = document.createElement('img');
  POPUP_PHOTO.classList.add('popup__photo');
  POPUP_PHOTO.src = icon === null ? '../src/assets/icons/user_icon.svg' : icon;
  POPUP_PHOTO.alt = 'popup photo';

  const POPUP_TITLE = document.createElement('h5');
  POPUP_TITLE.classList.add('popup__title');
  POPUP_TITLE.innerText = name;

  const POPUP_LOCATION = document.createElement('p');
  POPUP_LOCATION.classList.add('popup__location');
  POPUP_LOCATION.innerHTML = `${location}<span>•</span>${date}`;

  const POPUP_DESCRIPTION = document.createElement('p');
  POPUP_DESCRIPTION.classList.add('popup__description');
  POPUP_DESCRIPTION.innerText = content;

  POPUP_HEAD.append(POPUP_PHOTO, POPUP_TITLE, POPUP_LOCATION);
  POPUP_BODY.append(POPUP_CLOSE_ICON, POPUP_HEAD, POPUP_DESCRIPTION);
  POPUP_OVERLAY.append(POPUP_BODY);
  POPUP.append(POPUP_OVERLAY);

  return POPUP;
}
