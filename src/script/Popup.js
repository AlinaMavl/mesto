class Popup {
  constructor (selector) {
    this._popup = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    //слушатель клавиатуры надо устанавливать и удалять, так как он устанавливается на весь документ.
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if ( evt.target.classList.contains('popup__close-button') ||evt.target.classList.contains("popup")) {
        this.close(evt.target);
      }
    })
  }

}
export default Popup
//Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
//Модальное окно также закрывается при клике на затемнённую область вокруг формы.