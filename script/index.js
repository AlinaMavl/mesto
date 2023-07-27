//Попап открытия кнопки редактирования

const editButton = document.querySelector('.profile__edit-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('.popup__input_name_typed');
const jobInput = popupEdit.querySelector('.popup__input_description_typed');
const editForm = popupEdit.querySelector('.popup__form');

const popupAddPicture = document.querySelector('.popup_add_picture');
const popupFullView = document.querySelector('.popup_view_full');

//Открытие и закрытие попапов

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', clickOnEsc);
};

function closePopup(item){
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', clickOnEsc);
};

//Так как попапы всегда присутствуют в разметке, достаточно установить слушатели только один раз в теле модуля, не переустанавливая при каждом открытии модального окна
function clickOnOverlay (evt) {
  if(evt.target.classList.contains('popup')){
    closePopup(evt.target);
  }
};
//нужно перебрать все попапы, которые есть в системе и на каждый установить один и тот же слушатель.
document.querySelectorAll('.popup').forEach( popup => {
  //нужно использовать событие mousedown, а не click, чтобы не закрыть случайно попап по оверлею, если нажать мышкой внутри попапа, а потом, не разжимая, передвинуть курсор на оверлей. Такой баг появляется с событием click.
  popup.addEventListener('mousedown', clickOnOverlay);
})

//слушатель клавиатуры надо устанавливать и удалять, так как он устанавливается на весь документ.
function clickOnEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if(evt.key === 'Escape') {
    closePopup(popupOpened);
  }
};

//попап "Редактирование"

editButton.addEventListener('click', function(){
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
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
const closeAddButton = popupAddPicture.querySelector('.popup__close-button');
const formElementAdd = popupAddPicture.querySelector('.popup__form');

addButton.addEventListener('click',function() {
  openPopup(popupAddPicture);
});


closeAddButton.addEventListener('click', function() {
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


const popupCaption = popupFullView.querySelector('.popup__caption');
const popupViewImage = popupFullView.querySelector('.popup__view-image');
const closeButtonFullView = popupFullView.querySelector('.popup__close-button');

closeButtonFullView.addEventListener('click', () => {
  closePopup(popupFullView);
});

//Создаем логику добавления карточек через попап Новое место
const addInputName = popupAddPicture.querySelector('.popup__input_name');
const addInputLink = popupAddPicture.querySelector('.popup__input_link');

formElementAdd.addEventListener('submit', function (evt) {
  closePopup(popupAddPicture);
  evt.preventDefault();

  //кнопка добавить д.б. неактивной после добавления новой карточки
  evt.submitter.classList.add('popup__submit_inactive');
  evt.submitter.disabled = true;
  //Здесь createCard ждет объект вида! так он и вставляется!
  const cardData = {
    name: addInputName.value,
    link: addInputLink.value,
  };
  const newElement = createCard(cardData);
  elements.prepend(newElement);

  formElementAdd.reset();

});


