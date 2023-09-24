class Card {
  constructor(
    data,
    templateSelector,
    handleImageClick,
    handleDeleteClick,
    userId,
    handleLikeClick,
    handleDeleteLikeIcon
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this.handleImageClick = handleImageClick;
    this.handleDeleteClick = handleDeleteClick;
    this._userId = userId;
    this.handleLikeClick = handleLikeClick;
    this.handleDeleteLikeIcon = handleDeleteLikeIcon;
  }

  // Создаем темплейт
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true); // добавляем в эту секцию темплейт и клонируем

    return cardTemplate;
  }

  //ищем тайтл и картинку и присваим ему название
  _setData() {
    this._buttonLike = this._newCard.querySelector(".element__like");
    this._likeCounter = this._newCard.querySelector(".element__like-counter");
    this._elementCaption = this._newCard.querySelector(".element__caption");
    this._elementCaption.textContent = this._name;
    this._elementImage = this._newCard.querySelector(".element__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
  }

  //DELETE
  _checkDeleteButtonVisibility() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }
  }
  _handleDeleteButton() {
    this.handleDeleteClick(this);
  }

  deleteCard() {
    this._newCard.remove();
  }

  //LIKE
  addLike() {
    this._buttonLike.classList.add("element__like_active");
  }

  removeLike() {
    this._buttonLike.classList.remove("element__like_active");
  }

  setLikes(likes) {
    this._likeCounter.textContent = likes.length;
  }

  _setLikeButtonInitialState() {
    if (this.isLiked()) {
      this._buttonLike.classList.add("element__like_active");
    }
  }

  isLiked() {
    return this._likes.some((data) => {
        return data._id === this._userId
    });
}

  handleLikeCard() {
    if (this._buttonLike.classList.contains("element__like_active")) {
      this.handleDeleteLikeIcon(this._id);
    } else {
      this.handleLikeClick(this._id);
    }
  }

  //создаем слушатели
  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this.handleLikeCard();
    });

    this._deleteButton = this._newCard.querySelector(".element__delete");
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._elementImage.addEventListener("click", () => {
      this.handleImageClick({ name: this._name, link: this._link });
    });
  }

  //создаем карту
  createCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setLikeButtonInitialState();
    this._setEventListeners();
    this._checkDeleteButtonVisibility();
    return this._newCard;
  }
}

export default Card;
