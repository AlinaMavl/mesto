import "./index.css"; // добавьте импорт главного файла стилей
import {
  optionsApi,
  validationSettings,
  editButton,
  nameValue,
  jobValue,
  profileAvatar,
  popupEdit,
  nameInput,
  jobInput,
  addButton,
  popupAddPicture,
  popupFullView,
  popupConfirmed,
  popupAvatar,
} from "../utils/constants.js";
import Section from "../components/Section";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//SECTION

const api = new Api(optionsApi);

function renderCard(item) {
  const card = generateCard(item);
  cardSection.appendItem(card);
}

const cardSection = new Section(
  {
    items: optionsApi,
    renderer: renderCard,
  },
  ".elements"
);

Promise.all([api.getUserInfo(), api.getCardList()])
  .then(([data, cards]) => {
    userId = data._id;
    userData.setUserInfo(data);
    cardSection.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

//POPUP ADD PLACE
const popupAddPlace = new PopupWithForm({
  popup: popupAddPicture,
  handleFormSubmit: handleAddSubmit,
});

function handleAddSubmit(formItem) {
  popupAddPlace.renderLoading(true);
  api
    .createCardApi(formItem)
    .then((cardData) => {
      const card = generateCard(cardData);
      cardSection.prependItem(card);
      popupAddPlace.close();
    })
    .catch((err) => console.log(`Whats the ${err}`))
    .finally(() => {
      popupAddPlace.renderLoading(false);
    });
}

addButton.addEventListener("click", () => {
  popupAddPlace.open();
  validationEditPopup.toggleButtonState();
});

popupAddPlace.setEventListeners();

//USER_POPUP
let userId;

const userData = new UserInfo({
  name: nameValue,
  description: jobValue,
  avatar: profileAvatar,
});

const userInfoPopup = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: handleUserSubmit,
});

function handleUserSubmit(data) {
  userInfoPopup.renderLoading(true);

  api
    .patchUserInfo(data)

    .then((data) => {
      userData.setUserInfo(data);
      userInfoPopup.close();
    })
    .catch((err) => console.log(`Whats the ${err}`))
    .finally(() => {
      userInfoPopup.renderLoading(false);
    });
}

editButton.addEventListener("click", () => {
  userInfoPopup.open();
  const user = userData.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.description;
});

userInfoPopup.setEventListeners();

//USER_AVATAR
profileAvatar.addEventListener("click", () => {
  userAvatar.open();
});

const userAvatar = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: handleUserAvatar,
});

function handleUserAvatar(data) {
  userAvatar.renderLoading(true);

  api
    .patchAvatar(data)
    .then((data) => {
      userData.setUserInfo(data);
      userAvatar.close();
    })

    .catch((err) => console.log(`Whats the ${err}`))
    .finally(() => {
      userAvatar.renderLoading(false);
    });
}

userAvatar.setEventListeners();

//POPUP_FULL-VIEW! Открытие in class Card!
const popupFullPicture = new PopupWithImage(popupFullView);

function handleClickPopup(data) {
  popupFullPicture.open(data);
}

popupFullPicture.setEventListeners();

//POPUP_CONFIRMATION
const popupConfirmation = new PopupWithConfirmation(popupConfirmed);

popupConfirmation.setEventListeners();

//RENDER/GENERATE_CARD
function generateCard(item) {
  const card = new Card(
    item,

    ".picture-template_type_default",

    (data) => handleClickPopup(data),

    (card) => {
      popupConfirmation.open(card._id);
      popupConfirmation.setAction((id) => {
        api
          .deleteCardApi(id)
          .then(() => {
            card.deleteCard();
            popupConfirmation.close();
          })
          .catch((err) => console.log(`Whats the ${err}`));
      });
    },

    userId,

    (id) => {
      api
        .putLike(id)
        .then((data) => {
          card.setLikes(data.likes);
          card.addLike();
        })
        .catch((err) => console.log(`Whats the ${err}`));
    },

    (id) => {
      api
        .deleteLike(id)
        .then((data) => {
          card.setLikes(data.likes);
          card.removeLike();
        })
        .catch((err) => console.log(`Whats the ${err}`));
    }
  );

  const cardElement = card.createCard();
  return cardElement;
}

//VALIDATION
//в index.js создается экземпляр класса и вызывается его метод для валидации форм

const addForm = document.forms.profile;
const validationAddPopup = new FormValidator(validationSettings, addForm);
validationAddPopup.enableValidation();

const pictureForm = document.forms.picture;
const validationEditPopup = new FormValidator(validationSettings, pictureForm);
validationEditPopup.enableValidation();

const avatarForm = document.forms.avatar;
const validationAvatarPopup = new FormValidator(validationSettings, avatarForm);
validationAvatarPopup.enableValidation();
