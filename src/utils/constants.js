const optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814',
    'Content-Type': "application/json"
  }
}

const editButton = document.querySelector(".profile__edit-button");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__description");
const profileAvatar = document.querySelector('.profile__avatar');


const elementOfTemplate = document.querySelector(".element");
const elementCaption = document.querySelector(".element__caption");
const elementImage = document.querySelector('.element__image');
const elementLikeCounter = document.querySelector('.element__like-counter');

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
const addInputs = popupAddPicture.querySelectorAll(".popup__input");

//Попап открытия подноразмера
const popupFullView = document.querySelector(".popup_view_full");
const popupFullImage = popupFullView.querySelector('.popup__view-image');
const popupFullCaption = popupFullView.querySelector('.popup__caption')
const closeButtonFullView = popupFullView.querySelector(".popup__close-button");

const popupConfirmed = document.querySelector(".popup_type_confirmed");
const popupAvatar = document.querySelector(".popup_type_avatar");


const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
};

export {optionsApi, settings, editButton, nameValue, jobValue,
  profileAvatar,
  elementOfTemplate, elementCaption, elementImage,elementLikeCounter,
  popupEdit, closeEditButton,
  nameInput, jobInput, formEdit, addButton, popupAddPicture, closeAddButton, formElementAdd,
  addInputName, addInputLink, addInputs, popupFullView,popupFullImage, popupFullCaption, closeButtonFullView,
popupConfirmed, popupAvatar}