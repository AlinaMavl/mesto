import PopupWithImage from "./PopupWithImage.js";
import {popupFullView} from "./constants.js";

class Card {
  constructor(element, templateSelector, handleClickPopup) {
    this._templateSelector = templateSelector;
    this._newCard = this._getTemplate();
    this._name = element.name;
    this._link = element.link;
    this.handleClickPopup = handleClickPopup;
  }
//handleCardClick??
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
      this.handleClickPopup({name: this._name, link: this._link});
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