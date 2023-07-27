// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  //удаляем текст ошибки
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // Передадим сообщение об ошибке вторым аргументом
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, settings);
  }
};
//добавляем слушатели на все поля
const setEventListener = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach (inputElement => {
    inputElement.addEventListener ('input', () => {
      checkInputValidity(formElement, inputElement, settings);
      //Вызов функц toggleButtonState в теле обработчика события input.
      //Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
        toggleButtonState(inputList,buttonElement, settings);
    });
    toggleButtonState(inputList,buttonElement, settings);
  });
};

function enableValidation (settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach ((formElement) => {
    formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault()
    });
  setEventListener(formElement, settings);
  });
}



//она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
function hasInvalidInput (inputList) {
  return inputList.some((inputElement)=> {
    return !inputElement.validity.valid;

  })

}
//функция, которая отвечает за блокировку кнопки «Отправить».
function toggleButtonState (inputList, buttonElement, settings) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

enableValidation( {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
});