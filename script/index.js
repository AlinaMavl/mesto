import {elementCards} from "./element.js";
import { openPopup, closePopup, clickOnOverlay, clickOnEsc} from './utils.js';
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//открытия кнопки редактирования

const editButton = document.querySelector(".profile__edit-button");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__description");

const popupEdit = document.querySelector(".popup_edit");
const closeEditButton = popupEdit.querySelector(".popup__close-button");
const nameInput = popupEdit.querySelector(".popup__input_name_typed");
const jobInput = popupEdit.querySelector(".popup__input_description_typed");
const editForm = popupEdit.querySelector(".popup__form");

//Попап добавление карточек
const addButton = document.querySelector(".profile__add-button");
const popupAddPicture = document.querySelector(".popup_add_picture");
const closeAddButton = popupAddPicture.querySelector(".popup__close-button");
const formElementAdd = popupAddPicture.querySelector(".popup__form");
const addInputName = popupAddPicture.querySelector(".popup__input_name");
const addInputLink = popupAddPicture.querySelector(".popup__input_link");

//Попап открытия подноразмера
export const popupFullView = document.querySelector(".popup_view_full");
const closeButtonFullView = popupFullView.querySelector(".popup__close-button");

// добавляем в эту секцию темплейт
const elements = document.querySelector(".elements");

//нужно перебрать все попапы, которые есть в системе и на каждый установить один и тот же слушатель.

document.querySelectorAll(".popup").forEach((popup) => {

  //нужно использовать событие mousedown, а не click, чтобы не закрыть случайно попап по оверлею,
  //если нажать мышкой внутри попапа, а потом, не разжимая, передвинуть курсор на оверлей.
  //Такой баг появляется с событием click.

  popup.addEventListener("mousedown", clickOnOverlay);
});

editButton.addEventListener("click", function () {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  openPopup(popupEdit);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup(popupEdit);
}


closeEditButton.addEventListener("click", function () {
  closePopup(popupEdit);
});

editForm.addEventListener("submit", handleEditFormSubmit);

//Попап добавление карточек

addButton.addEventListener("click", function () {
  openPopup(popupAddPicture);
});

closeAddButton.addEventListener("click", function () {
  closePopup(popupAddPicture);
});

//Попап увеличения изображения- закрытие! Открытие in class Card!
closeButtonFullView.addEventListener("click", () => {
  closePopup(popupFullView);
});

//добавляем каждую карт в сетку//здесь используем класс кард!

elementCards.forEach((item) => {
  const card = new Card(item,'.picture-template_type_default');
  elements.prepend(card.createCard());
});

//Создаем логику добавления карточек через попап Новое место

formElementAdd.addEventListener("submit", function (evt) {
  closePopup(popupAddPicture);
  evt.preventDefault();

  //Здесь createCard ждет объект вида
  const cardData = {
    name: addInputName.value,
    link: addInputLink.value,

  };

  const newElement = new Card(cardData);

  elements.prepend(newElement.createCard());
  formElementAdd.reset();
  validationEditPopup.toggleButtonState();
})

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
};

//в index.js создается экземпляр класса и вызывается его метод

const addForm = document.forms.profile;
const validationAddPopup = new FormValidator(settings, addForm);
validationAddPopup.enableValidation();

const pictureForm = document.forms.picture;
const validationEditPopup = new FormValidator(settings, pictureForm);
validationEditPopup.enableValidation();



