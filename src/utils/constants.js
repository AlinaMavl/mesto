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
const addButton = document.querySelector(".profile__add-button");

const popupEdit = document.querySelector(".popup_edit");
const nameInput = popupEdit.querySelector(".popup__input_name_typed");
const jobInput = popupEdit.querySelector(".popup__input_description_typed");

const popupAddPicture = document.querySelector(".popup_add_picture");
const popupFullView = document.querySelector(".popup_view_full");
const popupConfirmed = document.querySelector(".popup_type_confirmed");
const popupAvatar = document.querySelector(".popup_type_avatar");

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
};

export {optionsApi, validationSettings, editButton, nameValue, jobValue,
  profileAvatar,
  popupEdit,
  nameInput, jobInput, addButton, popupAddPicture, popupFullView,
popupConfirmed, popupAvatar}