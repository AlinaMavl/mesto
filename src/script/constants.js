const elementCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector(".profile__edit-button");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__description");

const elementCaption = document.querySelector(".element__caption");
const elementImage = document.querySelector('.element__image');

const popupEdit = document.querySelector(".popup_edit");
const closeEditButton = popupEdit.querySelector(".popup__close-button");
const nameInput = popupEdit.querySelector(".popup__input_name_typed");
const jobInput = popupEdit.querySelector(".popup__input_description_typed");
const formEdit = popupEdit.querySelector(".popup__form");

//Попап добавление карточек
const addButton = document.querySelector(".profile__add-button");
const popupAddPicture = document.querySelector(".popup_add_picture");

const closeAddButton = popupAddPicture.querySelector(".popup__close-button");
const formElementAdd = popupAddPicture.querySelector(".popup__form");
const addInputName = popupAddPicture.querySelector(".popup__input_name");
const addInputLink = popupAddPicture.querySelector(".popup__input_link");

//Попап открытия подноразмера
const popupFullView = document.querySelector(".popup_view_full");
const popupFullImage = popupFullView.querySelector('.popup__view-image');
const popupFullCaption = popupFullView.querySelector('.popup__caption')
const closeButtonFullView = popupFullView.querySelector(".popup__close-button");

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
};

export {elementCards, settings, editButton, nameValue, jobValue,
  elementCaption, elementImage,
   popupEdit, closeEditButton,
  nameInput, jobInput, formEdit, addButton, popupAddPicture, closeAddButton, formElementAdd,
  addInputName, addInputLink, popupFullView,popupFullImage, popupFullCaption, closeButtonFullView}