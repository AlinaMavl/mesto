import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._popup= selector;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit')
  }

    open(id) {
      this._id = id;
      super.open();
    }

    setAction(id){
      this._userID = id
    }



  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
        this._userID(this._id);
        evt.preventDefault();
    });
    this.close();
  }

}

export default PopupWithConfirmation