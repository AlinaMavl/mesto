import './index.css'; // добавьте импорт главного файла стилей
import { optionsApi, settings, editButton, nameValue, jobValue,
  profileAvatar,
  elementOfTemplate,elementCaption, elementImage, elementLikeCounter,
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

Promise.all([api.getUserInfo(), api.getCardList()])
    .then(([data, cards]) => {
        userId = data._id;
        userData.setUserInfo(data);;
        cardsList.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })


//POPUP ADD PLACE
const popupAddPlace = new PopupWithForm ({
  selector: popupAddPicture,
  handleFormSubmit: handleAddSubmit
});

function handleAddSubmit(formItem) {
    popupAddPlace.renderLoading(true);
    api.createCardApi(formItem)
      .then ((newCardApi)=> {
        const card = generateCard(newCardApi);
        cardsList.addItem(card);
      popupAddPlace.close();
      })
      .catch((err) => console.log(`Whats the ${err}`))
      .finally(()=> {
        popupAddPlace.renderLoading(false)
      })
}

addButton.addEventListener('click', ()=> {
  popupAddPlace.open();
  validationEditPopup.toggleButtonState();
});

popupAddPlace.setEventListeners();


//USER_POPUP
let userId;

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
    .then(()=>{
      userInfoPopup.renderLoading(true);
    })
    .catch((err) => console.log(`Whats the ${err}`))
    .finally(()=> {
      userInfoPopup.renderLoading(false);
    })
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
  userAvatar.renderLoading(true);


  api.patchAvatar(data)
    .then ((data) => {
      userData.setUserInfo(data);
      profileAvatar.src = data.avatar;

    })

    .catch((err) => console.log(`Whats the ${err}`))
    .finally(()=>{
      userAvatar.renderLoading(false)
    })

    validationAvatarPopup.toggleButtonState();
    userAvatar.close();
}

userAvatar.setEventListeners();


//POPUP_FULL-VIEW! Открытие in class Card!
const popupFullPicture = new PopupWithImage (popupFullView);

function handleClickPopup(data) {
  popupFullPicture.open(data);
}

popupFullPicture.setEventListeners();


//POPUP_CONFIRMATION
const submitConfirmation = new PopupWithConfirmation (popupConfirmed);

submitConfirmation.setEventListeners();


//RENDER/GENERATE_CARD
function generateCard (item) {
    const card = new Card (
      item,

      '.picture-template_type_default',

      (data)=>handleClickPopup(data),

      (card) => {
        submitConfirmation.open(card._id);
        submitConfirmation.setAction(
          (id) => {
          api.deleteCardApi(id)
            .then(() => {

              card.delete();

              submitConfirmation.close();
            })
            .catch((err) => console.log(`Whats the ${err}`))

          })
          },

        userId,

        (id)=>{
          api. putLike(id)
            .then ((data) => {
              card.setLikes(data.likes);
              card.addLike(data.id);
            })
            .catch((err) => console.log(`Whats the ${err}`))
          },

          (id) => {
            api.deleteLike(id)
            .then ((data) => {
              card.setLikes(data.likes);
              console.log(data.likes)
              card.removeLike(data.id);
            })
            .catch((err) => console.log(`Whats the ${err}`))
          },

    )

      const cardElement = card.createCard();
      return cardElement;
  }


//VALIDATION
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
