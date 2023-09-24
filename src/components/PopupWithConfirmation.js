import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._popup = popup;
    this._form = this._popup.querySelector(".popup__form");
  }

  open(id) {
    this._id = id;
    super.open();
  }

  setAction(callback) {
    this._handleSubmit = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      this._handleSubmit(this._id);
      evt.preventDefault();
    })
  }
}

export default PopupWithConfirmation;
