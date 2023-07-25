const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
}

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  //удаляем текст ошибки
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};
//добавляем слушатели на все поля
const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach (inputElement => {
    inputElement.addEventListener ('input', () => {
      checkInputValidity(formElement, inputElement);
      //Вызов функц toggleButtonState в теле обработчика события input.
      //Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
      toggleButtonState(inputList,buttonElement);
    });
  });
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach ((formElement) => {
    formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault()
    });
  setEventListener(formElement);
  });
}

enableValidation(config);

//она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
function hasInvalidInput (inputList) {
  return inputList.some((inputElement)=> {
    return !inputElement.validity.valid;
  })

}
//функция, которая отвечает за блокировку кнопки «Отправить».
function toggleButtonState (inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
