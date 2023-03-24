const editButton = document.querySelector('.profile__edit-button_opened');
const closeButton = document.querySelector('.popup__close-button_closed');
const submitButton = document.querySelector('.popup__submit_saved');
let formElement = document.querySelector(".popup");
let nameValue = document.querySelector(".profile__name");  
let jobValue = document.querySelector(".profile__description"); 
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');


function openedPopup(){
  formElement.classList.add('popup_opened');
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;

}

function closedPopup(){
    formElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openedPopup);
closeButton.addEventListener('click', closedPopup);


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
}

formElement.addEventListener(formElement, handleFormSubmit); 