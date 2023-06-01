//Попап открытия кнопки редактирования
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupElement = document.querySelector(".popup");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__description");
const nameInput = document.querySelector('.popup__input_name_typed');
const jobInput = document.querySelector('.popup__input_description_typed');
const formElement = document.querySelector('.popup__form');

//Попап добавление карточек
const addButton = document.querySelector('.profile__add-button');
const popupAddPicture = document.querySelector('.popup_add_picture');
const closeAddButton = popupAddPicture.querySelector('.popup__add_close-button');
const formElementAdd = popupAddPicture.querySelector('.popup__form_add-button');

// Открытие и закрытие попапа "Редактирование"

function openedPopup(){
  popupElement.classList.add('popup_opened');
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
}

function closedPopup(){
  popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openedPopup);
closeButton.addEventListener('click', closedPopup);


function handleFormSubmit (evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closedPopup();
};

formElement.addEventListener('submit',handleFormSubmit);

//Попап добавление карточек

function openedAddPopup(){
  popupAddPicture.classList.add('popup_opened');
};

function closedAddPopup(){
  popupAddPicture.classList.remove('popup_opened');
};

// function handleFormSubmitAdd (evt) {
//     evt.preventDefault();
//     closedAddPopup();
// };

/////////////ПОДПРАВИТЬ!!!! Сабмит не работает

addButton.addEventListener('click',openedAddPopup);
closeAddButton.addEventListener('click', closedAddPopup);

formElementAdd.addEventListener('submit', function handleFormSubmitAdd (evt) {
    evt.preventDefault();
    closedAddPopup();
});


// Создаем все для гридов
const pictureTemplate = document.querySelector('.picture-template');
console.log(pictureTemplate);

const elemensGrid = document.querySelector('.elements');

const elementsCards = elementCards.map ((elements) => {
  return elementCards;
});


const createPictureCards = (pictureData) => {
  const pictureElement = elementCards.content()
    .querySelector('.element')
    .cloneNode(true);
  console.log(pictureElement);
  console.log(pictureData);
};

// elementCards.forEach ((picture) => {
//   createPictureCards(picture);
// });