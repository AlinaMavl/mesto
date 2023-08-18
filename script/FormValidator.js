class FormValidator {
  //два параметра конфиг и элемент той формы к валидируется
  constructor ( settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    // this._form = document.querySelector(this._formElement);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._input= this._formElement.querySelector(this._inputSelector);
    this._errorElement = this._formElement.querySelector(`.${this._input.id}-error`);
  }

// Функция, которая добавляет класс с ошибкой
_showInputError (errorMessage) {
  this._input.classList.add(this._inputErrorClass);

  this._errorElement.textContent = errorMessage;
  this._errorElement.classList.add(this._errorClass);
};

// Функция, которая удаляет класс с ошибкой
_hideInputError () {
  this._input.classList.remove(this._inputErrorClass);
  this._errorElement.classList.remove(this._errorClass);
  //удаляем текст ошибки
  this._errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
_checkInputValidity (inputElement) {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
    this._showInputError(this._input.validationMessage);
  } else {
    // Если проходит, скроем
     this._hideInputError();
  }
};
//добавляем слушатели на все поля
_setEventListener () {
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  this._inputList.forEach (inputElement => {
    inputElement.addEventListener ('input', () => {
      this._checkInputValidity(inputElement)
      //Вызов функц toggleButtonState в теле обработчика события input.
      //Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
      this._toggleButtonState(buttonElement);
    });
    this._toggleButtonState(buttonElement);
  });
};

enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach ((formElement) => {
    formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault()
    });
  this._setEventListener();
  });
}

//она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
_hasInvalidInput () {
  return this._inputList.some((inputElement)=> {
    return !inputElement.validity.valid;

  })
}

//функция, которая отвечает за блокировку кнопки «Отправить».
_toggleButtonState (buttonElement) {
  if(this._hasInvalidInput(this._inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

}

export default FormValidator;

