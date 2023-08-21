
//Открытие и закрытие попапов

function openPopup(item) {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", clickOnEsc);
}

function closePopup(item) {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", clickOnEsc);
}

//Так как попапы всегда присутствуют в разметке, достаточно установить слушатели только один раз в теле модуля, не переустанавливая при каждом открытии модального окна
function clickOnOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

//слушатель клавиатуры надо устанавливать и удалять, так как он устанавливается на весь документ.
function clickOnEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}


export {openPopup, closePopup,clickOnEsc,clickOnOverlay}
