class Card {
  constructor(data, templateSelector, handleClickPopup, handleDeletePopup,
              userId, handleLikeClick, handleDeleteLikeIcon) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;

    this._templateSelector = templateSelector;

    this.handleClickPopup = handleClickPopup;

    this.handleDeletePopup = handleDeletePopup;

    this._userId = userId;

    this.handleLikeClick = handleLikeClick;

    this.handleDeleteLikeIcon = handleDeleteLikeIcon;



    // this.isLike = false;
  }

  // Создаем темплейт
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".element")
      .cloneNode(true); // добавляем в эту секцию темплейт и клонируем

    return cardTemplate;
  }

  //ищем тайтл и картинку и присваим ему название
  _setData() {
    this._newCard = this._getTemplate();
    this._buttonLike = this._newCard.querySelector(".element__like");
    this._likeCounter = this._newCard.querySelector('.element__like-counter');

    this._elementCaption = this._newCard.querySelector(".element__caption");
    this._elementCaption.textContent = this._name;
    this._elementImage = this._newCard.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
  }


  //DELETE
  _handleDeleteButton() {
    this.handleDeletePopup(this);
  }
  removeDeleteButton(){
    if(this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }
  }
  delete() {
    this._handleDeleteButton(this._id);
    this._newCard.remove();
    this._newCard = null;
  }


//LIKE
  addLike() {
    this._buttonLike.classList.add('element__like_active');
    // this._likeCounter.textContent =  parseInt(this._likeCounter.textContent) + 1;
        this._likeCounter.textContent = this._likes.length;
  }

  removeLike() {
    this._buttonLike.classList.remove('element__like_active');
    // this._likeCounter.textContent =  parseInt(this._likeCounter.textContent) - 1;
        this._likeCounter.textContent = this._likes.length;
  }

  setLikes(likes) {
    this._like = likes;
    this._likeCounter.textContent = this._likes.length;
  }

  isLiked() {
    if (this._buttonLike) {
      if ( this._likes.some((data) => {
       return data._id === this._userId})) {
       this._buttonLike.classList.add('element__like_active');
       console.log(this._buttonLike);
       }


    }

      }


  //создаем слушатели
  _setEventListeners() {
    this._deleteButton = this._newCard.querySelector(".element__delete");
    //bind - передается тoт контекст который нужен для this
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    // ставим лайк

    //стрелоч функц с колбэком другой функц с данным контекстом
    this._buttonLike.addEventListener("click", ()=>{
      if (this._buttonLike.classList.contains("element__like_active")) {
        this.handleDeleteLikeIcon(this._id);
        this.setLikes()
      } else {
        this.handleLikeClick(this._id);
        this.setLikes()
  }});

    this._elementImage.addEventListener("click", () => {
      this.handleClickPopup({name: this._name, link: this._link});
     });
  }


  //создаем карту
  createCard() {
    this._newCard = this._getTemplate();
    this.isLiked();
    this._setData();
    this._setEventListeners();
    this.removeDeleteButton();


    return this._newCard;

  }

}

export default Card;