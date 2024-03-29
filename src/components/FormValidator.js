class FormValidator {
  //два параметра конфиг и элемент той формы к валидируется
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    inputElement.classList.add(this._inputErrorClass);
    //Элемент ошибки внутри этого метода, так как он меняется в зависимости от переданного поля формы
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.remove(this._errorClass);
    //удаляем текст ошибки
    errorElement.textContent = "";
  }

  // Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      // Передадим сообщение об ошибке вторым аргументом
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  }
  //добавляем слушатели на все поля
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        //Вызов функц toggleButtonState в теле обработчика события input.
        //Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
        this.toggleButtonState();
      });
      this.toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  //она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  //функция, которая отвечает за блокировку кнопки «Отправить».
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }
}

export default FormValidator;
