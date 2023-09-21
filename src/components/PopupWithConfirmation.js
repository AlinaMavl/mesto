import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor({selector, handleFormSubmit}) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup
      .querySelector('.popup__form');

  }

    submitConfirmation() {
      if(owner._id !== user._id){

      }
    }

//какой айдишник для удаления внутри метода. этот попап вы
//открываете только в одном случае - нажатие на кнопку удаления карточки.
//соответственно и переопределять выполняемую функцию надо только после нажатия
//на кнопку удаления (перед непосредственным открытием попапа)
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit();
    });

    super.setEventListeners();

  }

}

export default PopupWithConfirmation