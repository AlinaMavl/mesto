import Popup from './Popup.js';

class PopupWithForm extends Popup {

  constructor ({selector, handleFormSubmit}) {
    super(selector);
    this._form = this._popup
      .querySelector('.popup__form');
    this._inputs = this._form
       .querySelectorAll('.popup__input');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = Array.from(this._inputs);
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input)=> {
      this._formValues[input.name] = input.value;
    })
      // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();

  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm

// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса
//   PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик
//   сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.


