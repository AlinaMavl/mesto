const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
let popupElement = document.querySelector(".popup");
let nameValue = document.querySelector(".profile__name");  
let jobValue = document.querySelector(".profile__description"); 
let nameInput = document.querySelector('.popup__input_name_typed');
let jobInput = document.querySelector('.popup__input_description_typed');
const formElement = document.querySelector('.popup__form');


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
}

formElement.addEventListener('submit',handleFormSubmit);