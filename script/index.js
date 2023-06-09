//Попап открытия кнопки редактирования

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupElement = document.querySelector(".popup");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__description");
const nameInput = document.querySelector('.popup__input_name_typed');
const jobInput = document.querySelector('.popup__input_description_typed');
const formElement = document.querySelector('.popup__form');

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
const addButton = document.querySelector('.profile__add-button');
const popupAddPicture = document.querySelector('.popup_add_picture');
const closeAddButton = popupAddPicture.querySelector('.popup__close-button_add');
const formElementAdd = popupAddPicture.querySelector('.popup__form_add-button');

function openedAddPopup() {
  popupAddPicture.classList.add('popup_opened');
};

function closedAddPopup() {
  popupAddPicture.classList.remove('popup_opened');
};

addButton.addEventListener('click',openedAddPopup);
closeAddButton.addEventListener('click', closedAddPopup);

formElementAdd.addEventListener('submit', function handleFormSubmitAdd (evt) {
    evt.preventDefault();
    closedAddPopup();
});


// Создаем темплейт

const pictureTemplate = document.querySelector('.picture-template');
const templateContent = pictureTemplate.content;
const element = templateContent.querySelector('.element');
const elements = document.querySelector('.elements'); // добавляем в эту секцию темплейт


elementCards.forEach( item => {
  const newElement = createCard(item);
  elements.prepend(newElement);
});

//Клонируем темплейт и создаем НОВЫЙ КЛОН в ДОМ
//QS используется уже для нового!склонированного документа!!!

function createCard (item) {
  const newElement = element.cloneNode(true);
  const elementCaption = newElement.querySelector('.element__caption');
  elementCaption.textContent = item.name;
  const elementImage = newElement.querySelector('.element__image');
  elementImage.src= item.link;
  elementImage.alt= item.name;

  //слушатель удаления

  const deleteButton = newElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', function() {
    elements.removeChild(newElement);
  });

  // ставим лайк

  const buttonLike = newElement.querySelector('.element__like');
  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  //Попап увеличения изображения

  const popupFullView = document.querySelector('.popup_view_full');
  const popupCaption = popupFullView.querySelector('.popup__caption');
  const popupViewImage = popupFullView.querySelector('.popup__view-image');

  elementImage.addEventListener('click', () => {
    popupFullView.classList.add('popup_opened');
    popupCaption.textContent = item.name,
    popupViewImage.src = item.link
  });

  const deleteButtonFullView = popupFullView.querySelector('.popup__close-button');

  deleteButtonFullView.addEventListener('click', () => {
    popupFullView.classList.remove('popup_opened');
  });
  return newElement;
};

//Создаем логику добавления карточек через попап Новое место
const addInputName = document.querySelector('.popup__input_name');
const addInputLink = document.querySelector('.popup__input_link');

formElementAdd.addEventListener('submit', function(evt){
  evt.preventDefault();
  //Здесь createCard ждет объект вида! так он и вставляется!
  const cardData = {
    name: addInputName.value,
    link: addInputLink.value,
  };
  const newElement = createCard(cardData);
  elements.prepend(newElement);
  formElementAdd.reset();
});
