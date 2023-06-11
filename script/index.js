//Попап открытия кнопки редактирования

const editButton = document.querySelector('.profile__edit-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('.popup__input_name_typed');
const jobInput = popupEdit.querySelector('.popup__input_description_typed');
const editForm = popupEdit.querySelector('.popup__form');

//Открытие и закрытие попапа "Редактирование"

function openPopup(item) {
  item.classList.add('popup_opened');
};

function closePopup(item){
  item.classList.remove('popup_opened');
};

//попап "Редактирование"

nameInput.value = nameValue.textContent;
jobInput.value = jobValue.textContent;

editButton.addEventListener('click', function(){
  openPopup(popupEdit);
});

closeEditButton.addEventListener('click', function() {
  closePopup(popupEdit);
});

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup(popupEdit);
};

editForm.addEventListener('submit',handleEditFormSubmit);

//Попап добавление карточек

const addButton = document.querySelector('.profile__add-button');
const popupAddPicture = document.querySelector('.popup_add_picture');
const closeAddButton = popupAddPicture.querySelector('.popup__close-button');
const formElementAdd = popupAddPicture.querySelector('.popup__form');

addButton.addEventListener('click',function() {
  openPopup(popupAddPicture);
});
closeAddButton.addEventListener('click', function() {
  closePopup(popupAddPicture);
});

formElementAdd.addEventListener('submit', function handleFormSubmitAdd (evt) {
    evt.preventDefault();
    closePopup(popupAddPicture);
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
    newElement.remove();
  });

  // ставим лайк

  const buttonLike = newElement.querySelector('.element__like');
  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  //Попап увеличения изображения! только открытие! закрытие ниже

  elementImage.addEventListener('click', () => {
    openPopup(popupFullView);
    popupCaption.textContent = item.name,
    popupViewImage.src = item.link,
    popupViewImage.alt = item.name
  });

  return newElement;
};

//Попап увеличения изображения константы и закрытие! Открытие выше в креате кард!

const popupFullView = document.querySelector('.popup_view_full');
const popupCaption = popupFullView.querySelector('.popup__caption');
const popupViewImage = popupFullView.querySelector('.popup__view-image');
const closeButtonFullView = popupFullView.querySelector('.popup__close-button');

closeButtonFullView.addEventListener('click', () => {
  closePopup(popupFullView);
});

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
