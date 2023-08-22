import { openPopup} from "./utils.js";
import {popupFullView,} from "./index.js";

class Card {
  constructor(element, templateSelector) {
    this._templateSelector = templateSelector;
    this._newCard = this._getTemplate();
    this._name = element.name;
    this._link = element.link;
  }

  // Создаем темплейт
  _getTemplate() {
    const cardTemplate = document
      .querySelector(".picture-template")
      .content
      .querySelector(".element")
      .cloneNode(true); // добавляем в эту секцию темплейт и клонируем

    return cardTemplate;
  }

  //ищем тайтл и картинку и присваим ему название
  _setData() {
    const elementCaption = this._newCard.querySelector(".element__caption");
    elementCaption.textContent = this._name;
    this._elementImage = this._newCard.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
  }
  //для слушателя кнопки удаления
  _handleDeleteButton() {
    this._newCard.remove();
    this._newCard = null; //удаляем из браузера а не просто скрыв
  }

  //ддя слуш кнопки лайка
  _handleLikeButton() {
    this._buttonLike.classList.toggle('element__like_active');
  }

  //для откртыия полноразмен попапа
  _handleOpenFullViewPopup() {
    const popupCaption = popupFullView.querySelector(".popup__caption");
    const popupViewImage = popupFullView.querySelector(".popup__view-image");

    openPopup(popupFullView);

    popupViewImage.src = this._link;
    popupViewImage.alt = this._name;
    popupCaption.textContent = this._name;
  }

  //создаем слушатели
  _setEventListeners() {
    const deleteButton = this._newCard.querySelector(".element__delete");
    //bind - передается тoт контекст который нужен для this
    deleteButton.addEventListener("click", this._handleDeleteButton.bind(this));

    // ставим лайк
    this._buttonLike = this._newCard.querySelector(".element__like");
    //стрелоч функц с колбэком другой функц с данным контекстом
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._elementImage.addEventListener("click", () => {
      this._handleOpenFullViewPopup();

     });
  }

  //создаем карту
  createCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;