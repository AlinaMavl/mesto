import './index.css'; // добавьте импорт главного файла стилей
import { optionsApi, settings, editButton, nameValue, jobValue,
  profileAvatar,
  elementOfTemplate,elementCaption, elementImage,
  popupEdit, nameInput, jobInput, formEdit, addButton,
  popupAddPicture, closeAddButton, formElementAdd, addInputName, addInputLink,
  addInputs,popupFullView,
  popupFullCaption,popupFullImage,
  closeButtonFullView, closeEditButton,
  popupConfirmed, popupAvatar}
  from "../utils/constants.js";
import Section  from '../components/Section';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


//SECTION

const api = new Api(optionsApi);

function handleCardSection (item) {
    const card = generateCard(item);
    cardsList.addItem(card);
};

const cardsList = new Section ({
  items: optionsApi,
  renderer: handleCardSection
  }, '.elements'
);

api.getCardList()
  .then ((cards) => {
    cardsList.renderItems(cards)
   })
  .catch((err) => console.log(err))

//POPUP ADD PLACE
const popupAddPlace = new PopupWithForm ({
  selector: popupAddPicture,
  handleFormSubmit: handleAddSubmit
});

function handleAddSubmit(formItem) {
    api.createCardApi(formItem)
      .then ((newCardApi)=> {
        const card = generateCard(newCardApi);
        cardsList.addItem(card);
      popupAddPlace.close();
      })
      .catch((err) => console.log(`Whats the f${err}`))
}

addButton.addEventListener('click', ()=> {
  popupAddPlace.open();
  validationEditPopup.toggleButtonState();
});

popupAddPlace.setEventListeners();


//USER_POPUP
api.getUserInfo()
  .then ((user) => {
    userData.setUserInfo(user);
  })
  .catch((err) => console.log(`Whats the f${err}`))

const userData = new UserInfo({
  name: nameValue,
  description: jobValue,
  avatar: profileAvatar
});

const userInfoPopup = new PopupWithForm ({
  selector: popupEdit,
  handleFormSubmit: handleUserSubmit
});

function handleUserSubmit (data){
  api.patchUserInfo(data)
    .then ((data) => {
      userData.setUserInfo(data);
    })
    .catch((err) => console.log(`Whats the f${err}`))

    userInfoPopup.close();
}

editButton.addEventListener('click', ()=>{
  userInfoPopup.open();
  api.getUserInfo()
  .then ((user) => {
    nameInput.value = user.name;
    jobInput.value = user.about;
  })
})

userInfoPopup.setEventListeners();

//USER_AVATAR
profileAvatar.addEventListener('click', ()=> {
  userAvatar.open();
})

const userAvatar = new PopupWithForm({
  selector: popupAvatar,
  handleFormSubmit: handleUserAvatar
})

function handleUserAvatar (data) {

  api.patchAvatar(data)
    .then ((data) => {
      userData.setUserAvatar(data)
      profileAvatar.src = data.avatar;

    })

    validationAvatarPopup.toggleButtonState();
    userAvatar.close();
    console.log(data);
}

userAvatar.setEventListeners();
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

//в index.js создается экземпляр класса и вызывается его метод для валидации форм

const addForm = document.forms.profile;
const validationAddPopup = new FormValidator(settings, addForm);
validationAddPopup.enableValidation();

const pictureForm = document.forms.picture;
const validationEditPopup = new FormValidator(settings, pictureForm);
validationEditPopup.enableValidation();

const avatarForm = document.forms.avatar;
const validationAvatarPopup = new FormValidator(settings, avatarForm)
validationAvatarPopup.enableValidation();

// смена такста кнопки
// var but = document.getElementById("but");
// but.onclick = function() {
//     var old = this.innerText,
//         that = this;
//     this.innerText = "Подождите..."
//     this.disabled = true

//     // colback function
//     setTimeout(function() {
//         that.innerText = old;
//         that.disabled = false
//     }, 10000)
// }