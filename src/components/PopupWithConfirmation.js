import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._popup= selector;
    console.log(this._popup);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit')
  }
    open(id) {
      this._id = id;
      super.open();
      console.log(this._id)
    }

    setAction(id){
      this._formConfirmation = id;
    }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('submit', (evt) => {
        this._formConfirmation(this._id);
        evt.preventDefault();
    });
  }

}

export default PopupWithConfirmation