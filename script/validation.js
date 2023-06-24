
// Вынесем все необходимые элементы формы в константы

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_invalid');

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_invalid');
  errorElement.classList.remove('popup__input-error_active');
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
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit');
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
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach ((formElement) => {
    formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault()
    });
  setEventListener(formElement);
  });
}

enableValidation();

//она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
function hasInvalidInput (inputList) {
  return inputList.some((inputElement)=> {
    return !inputElement.validity.valid;
  })

}
//функция, которая отвечает за блокировку кнопки «Отправить».
function toggleButtonState (inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__submit_inactive');
    buttonElement.disabled = false;
  }
}




// const form = document.querySelector('.popup__form');


// const classNames = {
//   input: '.popup__input',
//   inputInvalid: 'popup__input_invalid',
//   error: '.popup__error',
//   submitButton: '.popup__submit',
// }

//input's names и функции для них которые будут вызываться при наличии ошибок
// const validators = {
//   fullName: validateFullName,
//   usersInfo: validateUsersInfo,
//   placeName: validatePlaceName,
//   pictureLink: validatePictureLink,
// }

// enableValidation (form,validators,classNames);

// //function returns error string or null
// function enableValidation (form,validators,classNames) {

//   // возвращает ошибку либо null если ошибки нет
//   const validate = (key, value) => {
//     const validator =  validators[key];
//     return validator(value);
//   };

//   //найти по имени инпут в css
//   const getInputElement = key => {
//     return form.querySelector(`${classNames.input}[name=${key}]`);
//   };

//   //находим элемент ошибки. в контейнере и в нем находим элемент где есть ошибка
//   //дата-кей = текущий name
//   const getErrorElement = key => {
//     const popupFormEl = form.querySelector(`${classNames.input}`);
//     //берем контейнер и в нем находим элемент ошибки
//     return popupFormEl.querySelector(`${classNames.error}[data-key=${key}]`);
//   };


//   const setError = (key, errorMessage) => {
//     //получаем текущую ошибку
//     const inputElement = getInputElement(key);
//     inputElement.classList.add(classNames.inputInvalid);
//     //если нет ошибки -создаем
//     let errorElement = getErrorElement(key);
//     if(!errorElement) {
//       errorElement =  document.createElement('span');
//       inputElement.after(errorElement);
//     }

//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(classNames.error);
//     //dataset-св-вщ dom элементов ключ который мы можем найти через data-key
//     errorElement.dataset.key = key;
//   }
//   //
//   form.addEventListener('input', evt => {
//     const key = evt.target.name;
//     const value = evt.target.value;
//     //из форм дата(все данные) достаем объект со всеми значениями
//     const formData = new FormData(evt.currentTarget);
//     const values = Object.fromEntries(formData);

//     const error = validate(key, value,values);
//     //если нет ошибки ранний ретерн останавливает код на этом месте
//     if(!error) {
//       return; //ранний ретерн
//     }
//     //если ошибка есть код продолжается
//     setError(key, error);

//   });
// };



// //чтобы ничего не сломалось в функции ниже передаем одно значение для перв.аргум_в
// //ошибки и их условия
// function validateFullName (value) {
//   if(!value) {
//     return 'Введите имя пользователя';
//   }
//   if(value.length < 5) {
//     return 'Имя пользователя должно быть не меньше 5 символов'
//   }

//   if(value.length > 40) {
//     return 'Имя пользователя должно быть не больше 40 символов'
//   }
//   return null;
// }

// function validateUsersInfo (value) {
//   if(!value) {
//     return 'Введите информацию'
//   }
//   if(value.length < 2) {
//     return 'Некорректная длина'
//   }
//   if(value.length > 200) {
//     return "Слишком длинно";
//   }
//   return null;
// }

// function validatePlaceName (value) {
//   if(!value) {
//     return 'Введите название'
//   }
//   if(value.length < 2 || value.length > 30) {
//     return 'Некорректная длина'
//   }
//   return null;
// }

// function validatePictureLink (value) {
//   if(!value.includes(URL)) {
//     return 'Введите ссылку'
//   }

//   return null;
// }