import './index.css'; // добавьте импорт главного файла стилей
import { elementCards, settings, editButton, nameValue, jobValue,
  elementCaption, elementImage,
  popupEdit, nameInput, jobInput, formEdit, addButton,
  popupAddPicture, closeAddButton, formElementAdd, addInputName, addInputLink, popupFullView,
  popupFullCaption,popupFullImage,
  closeButtonFullView, closeEditButton}
  from "../utils/constants.js";
import Section  from '../components/Section';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';


const userInfoPopup = new PopupWithForm ({
  selector: popupEdit,
  handleFormSubmit: (data)=> {
    userData.setUserInfo(data);
    userInfoPopup.close();
  }
});

const userData = new UserInfo({
  userName: nameValue,
  userDescription: jobValue});

editButton.addEventListener('click', ()=>{
  userInfoPopup.open();
  const user = userData.getUserInfo();
  nameInput.value = user.userName;
  jobInput.value = user.userDescription;
})


userInfoPopup.setEventListeners();

const popupAddPlace = new PopupWithForm ({
  selector: popupAddPicture,
  handleFormSubmit: (formItem)=> {
    cardsList.addItem(
    generateCard(formItem));
    popupAddPlace.close();
  }
});

addButton.addEventListener('click', ()=> {
  popupAddPlace.open();
  validationEditPopup.toggleButtonState();
});

popupAddPlace.setEventListeners();

//Попап увеличения изображения- закрытие! Открытие in class Card!
const popupFullPicture = new PopupWithImage (popupFullView);

function handleClickPopup(data) {
  popupFullPicture.open(data);
}

popupFullPicture.setEventListeners();

function generateCard (item) {
    const card = new Card (item ,
      '.picture-template_type_default',
      (data)=>handleClickPopup(data));
    const cardElement = card.createCard();
    return cardElement;
}


const cardsList = new Section ({
  items: elementCards,
  renderer: (item) => {
    const card = generateCard(item);
    cardsList.addItem(card);
    },
  }, '.elements'
);

cardsList.renderItems();

//в index.js создается экземпляр класса и вызывается его метод для валидации форм

const addForm = document.forms.profile;
const validationAddPopup = new FormValidator(settings, addForm);
validationAddPopup.enableValidation();

const pictureForm = document.forms.picture;
const validationEditPopup = new FormValidator(settings, pictureForm);
validationEditPopup.enableValidation();
