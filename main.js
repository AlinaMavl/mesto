/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_sendRequest",
    value: function _sendRequest(url, options) {
      return fetch(url, options).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        //если запрос не прошел то выкидываем ошибку
        //error уже встроен
        throw new Error("Что-то не так");
      });
    }
  }, {
    key: "getCardList",
    value: function getCardList() {
      return this._sendRequest("".concat(this._url, "/cards"), {
        method: "GET",
        headers: this._headers
      });
    }
  }, {
    key: "createCardApi",
    value: function createCardApi(cardData) {
      return this._sendRequest("".concat(this._url, "/cards"), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(cardData)
      });
    }
  }, {
    key: "deleteCardApi",
    value: function deleteCardApi(id) {
      return this._sendRequest("".concat(this._url, "/cards/").concat(id), {
        method: "DELETE",
        headers: this._headers
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._sendRequest("".concat(this._url, "/users/me"), {
        method: "GET",
        headers: this._headers
      });
    }
  }, {
    key: "patchUserInfo",
    value: function patchUserInfo(data) {
      return this._sendRequest("".concat(this._url, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      });
    }
  }, {
    key: "patchAvatar",
    value: function patchAvatar(data) {
      return this._sendRequest("".concat(this._url, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.link
        })
      });
    }
  }, {
    key: "putLike",
    value: function putLike(id) {
      return this._sendRequest("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this._headers
      });
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return this._sendRequest("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      });
    }
  }]);
  return Api;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, templateSelector, handleImageClick, handleDeleteClick, userId, handleLikeClick, handleDeleteLikeIcon) {
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this.handleImageClick = handleImageClick;
    this.handleDeleteClick = handleDeleteClick;
    this._userId = userId;
    this.handleLikeClick = handleLikeClick;
    this.handleDeleteLikeIcon = handleDeleteLikeIcon;
  }

  // Создаем темплейт
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true); // добавляем в эту секцию темплейт и клонируем

      return cardTemplate;
    }

    //ищем тайтл и картинку и присваим ему название
  }, {
    key: "_setData",
    value: function _setData() {
      this._buttonLike = this._newCard.querySelector(".element__like");
      this._likeCounter = this._newCard.querySelector(".element__like-counter");
      this._elementCaption = this._newCard.querySelector(".element__caption");
      this._elementCaption.textContent = this._name;
      this._elementImage = this._newCard.querySelector(".element__image");
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._likeCounter.textContent = this._likes.length;
    }

    //DELETE
  }, {
    key: "_checkDeleteButtonVisibility",
    value: function _checkDeleteButtonVisibility() {
      if (this._ownerId !== this._userId) {
        this._deleteButton.remove();
      }
    }
  }, {
    key: "_handleDeleteButton",
    value: function _handleDeleteButton() {
      this.handleDeleteClick(this);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._newCard.remove();
    }

    //LIKE
  }, {
    key: "addLike",
    value: function addLike() {
      this._buttonLike.classList.add("element__like_active");
    }
  }, {
    key: "removeLike",
    value: function removeLike() {
      this._buttonLike.classList.remove("element__like_active");
    }
  }, {
    key: "setLikes",
    value: function setLikes(likes) {
      this._likeCounter.textContent = likes.length;
    }
  }, {
    key: "_setLikeButtonInitialState",
    value: function _setLikeButtonInitialState() {
      if (this.isLiked()) {
        this._buttonLike.classList.add("element__like_active");
      }
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this = this;
      return this._likes.some(function (data) {
        return data._id === _this._userId;
      });
    }
  }, {
    key: "handleLikeCard",
    value: function handleLikeCard() {
      if (this._buttonLike.classList.contains("element__like_active")) {
        this.handleDeleteLikeIcon(this._id);
      } else {
        this.handleLikeClick(this._id);
      }
    }

    //создаем слушатели
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._buttonLike.addEventListener("click", function () {
        _this2.handleLikeCard();
      });
      this._deleteButton = this._newCard.querySelector(".element__delete");
      this._deleteButton.addEventListener("click", function () {
        _this2._handleDeleteButton();
      });
      this._elementImage.addEventListener("click", function () {
        _this2.handleImageClick({
          name: _this2._name,
          link: _this2._link
        });
      });
    }

    //создаем карту
  }, {
    key: "createCard",
    value: function createCard() {
      this._newCard = this._getTemplate();
      this._setData();
      this._setLikeButtonInitialState();
      this._setEventListeners();
      this._checkDeleteButtonVisibility();
      return this._newCard;
    }
  }]);
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  //два параметра конфиг и элемент той формы к валидируется
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);
    this._settings = settings;
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  // Функция, которая добавляет класс с ошибкой
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      inputElement.classList.add(this._inputErrorClass);
      //Элемент ошибки внутри этого метода, так как он меняется в зависимости от переданного поля формы
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }

    // Функция, которая удаляет класс с ошибкой
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      inputElement.classList.remove(this._inputErrorClass);
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      errorElement.classList.remove(this._errorClass);
      //удаляем текст ошибки
      errorElement.textContent = "";
    }

    // Функция, которая проверяет валидность поля
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
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
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);
          //Вызов функц toggleButtonState в теле обработчика события input.
          //Такой вызов проверит состояние кнопки при каждом изменении символа в любом из полей.
          _this.toggleButtonState();
        });
        _this.toggleButtonState();
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }

    //она обходит массив полей и отвечает на вопрос: «Есть ли здесь хотя бы одно поле, которое не прошло валидацию?».
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_disableButton",
    value: function _disableButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }, {
    key: "_enableButton",
    value: function _enableButton() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }

    //функция, которая отвечает за блокировку кнопки «Отправить».
  }, {
    key: "toggleButtonState",
    value: function toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    }
  }]);
  return FormValidator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    _classCallCheck(this, Popup);
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      //слушатель клавиатуры надо устанавливать и удалять, так как он устанавливается на весь документ.
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains("popup")) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);
//Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
//Модальное окно также закрывается при клике на затемнённую область вокруг формы.

/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirmation, _Popup);
  var _super = _createSuper(PopupWithConfirmation);
  function PopupWithConfirmation(popup) {
    var _this;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _super.call(this, popup);
    _this._popup = popup;
    _this._form = _this._popup.querySelector(".popup__form");
    return _this;
  }
  _createClass(PopupWithConfirmation, [{
    key: "open",
    value: function open(id) {
      this._id = id;
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "open", this).call(this);
    }
  }, {
    key: "setAction",
    value: function setAction(callback) {
      this._handleSubmit = callback;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (evt) {
        _this2._handleSubmit(_this2._id);
        evt.preventDefault();
      });
    }
  }]);
  return PopupWithConfirmation;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithConfirmation);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popup = _ref.popup,
      handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup);
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = Array.from(_this._form.querySelectorAll('.popup__input'));
    _this._submitButton = _this._form.querySelector('.popup__submit');
    _this._submitButtonText = _this._submitButton.textContent;
    _this._handleFormSubmit = handleFormSubmit;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      // создаём пустой объект
      this._formValues = {};
      // добавляем в этот объект значения всех полей
      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      // возвращаем объект значений
      return this._formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._handleFormSubmit(_this3._getInputValues());
      });
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Сохранение...';
      if (isLoading) {
        this._submitButton.textContent = loadingText;
      } else {
        this._submitButton.textContent = this._submitButtonText;
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса
//   PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик
//   сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popup);
    _this._image = _this._popup.querySelector('.popup__view-image'), _this._caption = _this._popup.querySelector('.popup__caption');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var link = _ref.link,
        name = _ref.name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._image.src = link;
      this._image.alt = name;
      this._caption.textContent = name;
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать
// родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап
// картинку с src изображения и подписью к картинке.

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var item = _ref.item,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "prependItem",
    value: function prependItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "appendItem",
    value: function appendItem(item) {
      this._container.append(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems(arr) {
      var _this = this;
      arr.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);
//У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
      description = _ref.description,
      avatar = _ref.avatar;
    _classCallCheck(this, UserInfo);
    this._name = name;
    this._description = description;
    this._avatar = avatar;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        description: this._description.textContent,
        avatar: this._avatar.src
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        avatar = _ref2.avatar;
      this._name.textContent = name;
      this._description.textContent = about;
      this._avatar.src = avatar;
    }
  }]);
  return UserInfo;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента
// информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод
// пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addButton: () => (/* binding */ addButton),
/* harmony export */   editButton: () => (/* binding */ editButton),
/* harmony export */   jobInput: () => (/* binding */ jobInput),
/* harmony export */   jobValue: () => (/* binding */ jobValue),
/* harmony export */   nameInput: () => (/* binding */ nameInput),
/* harmony export */   nameValue: () => (/* binding */ nameValue),
/* harmony export */   optionsApi: () => (/* binding */ optionsApi),
/* harmony export */   popupAddPicture: () => (/* binding */ popupAddPicture),
/* harmony export */   popupAvatar: () => (/* binding */ popupAvatar),
/* harmony export */   popupConfirmed: () => (/* binding */ popupConfirmed),
/* harmony export */   popupEdit: () => (/* binding */ popupEdit),
/* harmony export */   popupFullView: () => (/* binding */ popupFullView),
/* harmony export */   profileAvatar: () => (/* binding */ profileAvatar),
/* harmony export */   validationSettings: () => (/* binding */ validationSettings)
/* harmony export */ });
var optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814',
    'Content-Type': "application/json"
  }
};
var editButton = document.querySelector(".profile__edit-button");
var nameValue = document.querySelector(".profile__name");
var jobValue = document.querySelector(".profile__description");
var profileAvatar = document.querySelector('.profile__avatar');
var addButton = document.querySelector(".profile__add-button");
var popupEdit = document.querySelector(".popup_edit");
var nameInput = popupEdit.querySelector(".popup__input_name_typed");
var jobInput = popupEdit.querySelector(".popup__input_description_typed");
var popupAddPicture = document.querySelector(".popup_add_picture");
var popupFullView = document.querySelector(".popup_view_full");
var popupConfirmed = document.querySelector(".popup_type_confirmed");
var popupAvatar = document.querySelector(".popup_type_avatar");
var validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
};


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PopupWithConfirmation.js */ "./src/components/PopupWithConfirmation.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
 // добавьте импорт главного файла стилей










//SECTION

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.optionsApi);
function renderCard(item) {
  var card = generateCard(item);
  cardSection.appendItem(card);
}
var cardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_2__["default"]({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.optionsApi,
  renderer: renderCard
}, ".elements");
Promise.all([api.getUserInfo(), api.getCardList()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    data = _ref2[0],
    cards = _ref2[1];
  userId = data._id;
  userData.setUserInfo(data);
  cardSection.renderItems(cards);
}).catch(function (err) {
  console.log(err);
});

//POPUP ADD PLACE
var popupAddPlace = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popup: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupAddPicture,
  handleFormSubmit: handleAddSubmit
});
function handleAddSubmit(formItem) {
  popupAddPlace.renderLoading(true);
  api.createCardApi(formItem).then(function (cardData) {
    var card = generateCard(cardData);
    cardSection.prependItem(card);
    popupAddPlace.close();
  }).catch(function (err) {
    return console.log("Whats the ".concat(err));
  }).finally(function () {
    popupAddPlace.renderLoading(false);
  });
}
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addButton.addEventListener("click", function () {
  popupAddPlace.open();
  validationEditPopup.toggleButtonState();
});
popupAddPlace.setEventListeners();

//USER_POPUP
var userId;
var userData = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  name: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.nameValue,
  description: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.jobValue,
  avatar: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileAvatar
});
var userInfoPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popup: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupEdit,
  handleFormSubmit: handleUserSubmit
});
function handleUserSubmit(data) {
  userInfoPopup.renderLoading(true);
  api.patchUserInfo(data).then(function (data) {
    userData.setUserInfo(data);
    userInfoPopup.close();
  }).catch(function (err) {
    return console.log("Whats the ".concat(err));
  }).finally(function () {
    userInfoPopup.renderLoading(false);
  });
}
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editButton.addEventListener("click", function () {
  userInfoPopup.open();
  var user = userData.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value = user.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.jobInput.value = user.description;
});
userInfoPopup.setEventListeners();

//USER_AVATAR
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileAvatar.addEventListener("click", function () {
  userAvatar.open();
});
var userAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popup: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupAvatar,
  handleFormSubmit: handleUserAvatar
});
function handleUserAvatar(data) {
  userAvatar.renderLoading(true);
  api.patchAvatar(data).then(function (data) {
    userData.setUserInfo(data);
    userAvatar.close();
  }).catch(function (err) {
    return console.log("Whats the ".concat(err));
  }).finally(function () {
    userAvatar.renderLoading(false);
  });
}
userAvatar.setEventListeners();

//POPUP_FULL-VIEW! Открытие in class Card!
var popupFullPicture = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupFullView);
function handleClickPopup(data) {
  popupFullPicture.open(data);
}
popupFullPicture.setEventListeners();

//POPUP_CONFIRMATION
var popupConfirmation = new _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_9__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupConfirmed);
popupConfirmation.setEventListeners();

//RENDER/GENERATE_CARD
function generateCard(item) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"](item, ".picture-template_type_default", function (data) {
    return handleClickPopup(data);
  }, function (card) {
    popupConfirmation.open(card._id);
    popupConfirmation.setAction(function (id) {
      api.deleteCardApi(id).then(function () {
        card.deleteCard();
        popupConfirmation.close();
      }).catch(function (err) {
        return console.log("Whats the ".concat(err));
      });
    });
  }, userId, function (id) {
    api.putLike(id).then(function (data) {
      card.setLikes(data.likes);
      card.addLike();
    }).catch(function (err) {
      return console.log("Whats the ".concat(err));
    });
  }, function (id) {
    api.deleteLike(id).then(function (data) {
      card.setLikes(data.likes);
      card.removeLike();
    }).catch(function (err) {
      return console.log("Whats the ".concat(err));
    });
  });
  var cardElement = card.createCard();
  return cardElement;
}

//VALIDATION
//в index.js создается экземпляр класса и вызывается его метод для валидации форм

var addForm = document.forms.profile;
var validationAddPopup = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSettings, addForm);
validationAddPopup.enableValidation();
var pictureForm = document.forms.picture;
var validationEditPopup = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSettings, pictureForm);
validationEditPopup.enableValidation();
var avatarForm = document.forms.avatar;
var validationAvatarPopup = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validationSettings, avatarForm);
validationAvatarPopup.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQWtCLEdBQUcsSUFBSWxKLG9FQUFhLENBQUNnSCxtRUFBa0IsRUFBRStCLE9BQU8sQ0FBQztBQUN6RUcsa0JBQWtCLENBQUNuSCxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXJDLElBQU1vSCxXQUFXLEdBQUdyTCxRQUFRLENBQUNrTCxLQUFLLENBQUNJLE9BQU87QUFDMUMsSUFBTWYsbUJBQW1CLEdBQUcsSUFBSXJJLG9FQUFhLENBQUNnSCxtRUFBa0IsRUFBRW1DLFdBQVcsQ0FBQztBQUM5RWQsbUJBQW1CLENBQUN0RyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXRDLElBQU1zSCxVQUFVLEdBQUd2TCxRQUFRLENBQUNrTCxLQUFLLENBQUN4TSxNQUFNO0FBQ3hDLElBQU04TSxxQkFBcUIsR0FBRyxJQUFJdEosb0VBQWEsQ0FBQ2dILG1FQUFrQixFQUFFcUMsVUFBVSxDQUFDO0FBQy9FQyxxQkFBcUIsQ0FBQ3ZILGdCQUFnQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFrdGlrdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWt0aWt1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByYWt0aWt1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJha3Rpa3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsLCBoZWFkZXJzIH0pIHtcbiAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBfc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9XG4gICAgICAgIC8v0LXRgdC70Lgg0LfQsNC/0YDQvtGBINC90LUg0L/RgNC+0YjQtdC7INGC0L4g0LLRi9C60LjQtNGL0LLQsNC10Lwg0L7RiNC40LHQutGDXG4gICAgICAgIC8vZXJyb3Ig0YPQttC1INCy0YHRgtGA0L7QtdC9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCn0YLQvi3RgtC+INC90LUg0YLQsNC6XCIpO1xuICAgICAgfSlcbiAgfVxuXG4gIGdldENhcmRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNhcmRBcGkoY2FyZERhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QoYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyZERhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FyZEFwaShpZCkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdChgJHt0aGlzLl91cmx9L2NhcmRzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIHBhdGNoVXNlckluZm8oZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIGFib3V0OiBkYXRhLmFib3V0XG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHBhdGNoQXZhdGFyKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QoYCR7dGhpcy5fdXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF2YXRhcjogZGF0YS5saW5rLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcHV0TGlrZShpZCkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdChgJHt0aGlzLl91cmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgIH0pXG4gIH1cblxuICBkZWxldGVMaWtlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KGAke3RoaXMuX3VybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwaTtcbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHRlbXBsYXRlU2VsZWN0b3IsXG4gICAgaGFuZGxlSW1hZ2VDbGljayxcbiAgICBoYW5kbGVEZWxldGVDbGljayxcbiAgICB1c2VySWQsXG4gICAgaGFuZGxlTGlrZUNsaWNrLFxuICAgIGhhbmRsZURlbGV0ZUxpa2VJY29uXG4gICkge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XG4gICAgdGhpcy5oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcbiAgICB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xuICAgIHRoaXMuaGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xuICAgIHRoaXMuaGFuZGxlRGVsZXRlTGlrZUljb24gPSBoYW5kbGVEZWxldGVMaWtlSWNvbjtcbiAgfVxuXG4gIC8vINCh0L7Qt9C00LDQtdC8INGC0LXQvNC/0LvQtdC50YJcbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50XCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0Y3RgtGDINGB0LXQutGG0LjRjiDRgtC10LzQv9C70LXQudGCINC4INC60LvQvtC90LjRgNGD0LXQvFxuXG4gICAgcmV0dXJuIGNhcmRUZW1wbGF0ZTtcbiAgfVxuXG4gIC8v0LjRidC10Lwg0YLQsNC50YLQuyDQuCDQutCw0YDRgtC40L3QutGDINC4INC/0YDQuNGB0LLQsNC40Lwg0LXQvNGDINC90LDQt9Cy0LDQvdC40LVcbiAgX3NldERhdGEoKSB7XG4gICAgdGhpcy5fYnV0dG9uTGlrZSA9IHRoaXMuX25ld0NhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19saWtlXCIpO1xuICAgIHRoaXMuX2xpa2VDb3VudGVyID0gdGhpcy5fbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2xpa2UtY291bnRlclwiKTtcbiAgICB0aGlzLl9lbGVtZW50Q2FwdGlvbiA9IHRoaXMuX25ld0NhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19jYXB0aW9uXCIpO1xuICAgIHRoaXMuX2VsZW1lbnRDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UgPSB0aGlzLl9uZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faW1hZ2VcIik7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fbGlrZUNvdW50ZXIudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XG4gIH1cblxuICAvL0RFTEVURVxuICBfY2hlY2tEZWxldGVCdXR0b25WaXNpYmlsaXR5KCkge1xuICAgIGlmICh0aGlzLl9vd25lcklkICE9PSB0aGlzLl91c2VySWQpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgX2hhbmRsZURlbGV0ZUJ1dHRvbigpIHtcbiAgICB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9uZXdDYXJkLnJlbW92ZSgpO1xuICB9XG5cbiAgLy9MSUtFXG4gIGFkZExpa2UoKSB7XG4gICAgdGhpcy5fYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICByZW1vdmVMaWtlKCkge1xuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIpO1xuICB9XG5cbiAgc2V0TGlrZXMobGlrZXMpIHtcbiAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGxpa2VzLmxlbmd0aDtcbiAgfVxuXG4gIF9zZXRMaWtlQnV0dG9uSW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLmlzTGlrZWQoKSkge1xuICAgICAgdGhpcy5fYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgaXNMaWtlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlrZXMuc29tZSgoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5faWQgPT09IHRoaXMuX3VzZXJJZFxuICAgIH0pO1xufVxuXG4gIGhhbmRsZUxpa2VDYXJkKCkge1xuICAgIGlmICh0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIpKSB7XG4gICAgICB0aGlzLmhhbmRsZURlbGV0ZUxpa2VJY29uKHRoaXMuX2lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xuICAgIH1cbiAgfVxuXG4gIC8v0YHQvtC30LTQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9C4XG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9idXR0b25MaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUxpa2VDYXJkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9uZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fZGVsZXRlXCIpO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQnV0dG9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSW1hZ2VDbGljayh7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvL9GB0L7Qt9C00LDQtdC8INC60LDRgNGC0YNcbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9uZXdDYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXREYXRhKCk7XG4gICAgdGhpcy5fc2V0TGlrZUJ1dHRvbkluaXRpYWxTdGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fY2hlY2tEZWxldGVCdXR0b25WaXNpYmlsaXR5KCk7XG4gICAgcmV0dXJuIHRoaXMuX25ld0NhcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAvL9C00LLQsCDQv9Cw0YDQsNC80LXRgtGA0LAg0LrQvtC90YTQuNCzINC4INGN0LvQtdC80LXQvdGCINGC0L7QuSDRhNC+0YDQvNGLINC6INCy0LDQu9C40LTQuNGA0YPQtdGC0YHRj1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbiAgLy8g0KTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINC00L7QsdCw0LLQu9GP0LXRgiDQutC70LDRgdGBINGBINC+0YjQuNCx0LrQvtC5XG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgLy/QrdC70LXQvNC10L3RgiDQvtGI0LjQsdC60Lgg0LLQvdGD0YLRgNC4INGN0YLQvtCz0L4g0LzQtdGC0L7QtNCwLCDRgtCw0Log0LrQsNC6INC+0L0g0LzQtdC90Y/QtdGC0YHRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0L/QtdGA0LXQtNCw0L3QvdC+0LPQviDQv9C+0LvRjyDRhNC+0YDQvNGLXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgLy8g0KTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINGD0LTQsNC70Y/QtdGCINC60LvQsNGB0YEg0YEg0L7RiNC40LHQutC+0LlcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgLy/Rg9C00LDQu9GP0LXQvCDRgtC10LrRgdGCINC+0YjQuNCx0LrQuFxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICAvLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L/RgNC+0LLQtdGA0Y/QtdGCINCy0LDQu9C40LTQvdC+0YHRgtGMINC/0L7Qu9GPXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIC8vINCV0YHQu9C4INC/0L7Qu9C1INC90LUg0L/RgNC+0YXQvtC00LjRgiDQstCw0LvQuNC00LDRhtC40Y4sINC/0L7QutCw0LbQtdC8INC+0YjQuNCx0LrRg1xuICAgICAgLy8g0J/QtdGA0LXQtNCw0LTQuNC8INGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSDQstGC0L7RgNGL0Lwg0LDRgNCz0YPQvNC10L3RgtC+0LxcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g0JXRgdC70Lgg0L/RgNC+0YXQvtC00LjRgiwg0YHQutGA0L7QtdC8XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICAvL9C00L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70Lgg0L3QsCDQstGB0LUg0L/QvtC70Y9cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgLy/QktGL0LfQvtCyINGE0YPQvdC60YYgdG9nZ2xlQnV0dG9uU3RhdGUg0LIg0YLQtdC70LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjRjyBpbnB1dC5cbiAgICAgICAgLy/QotCw0LrQvtC5INCy0YvQt9C+0LIg0L/RgNC+0LLQtdGA0LjRgiDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvdC+0L/QutC4INC/0YDQuCDQutCw0LbQtNC+0Lwg0LjQt9C80LXQvdC10L3QuNC4INGB0LjQvNCy0L7Qu9CwINCyINC70Y7QsdC+0Lwg0LjQtyDQv9C+0LvQtdC5LlxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8v0L7QvdCwINC+0LHRhdC+0LTQuNGCINC80LDRgdGB0LjQsiDQv9C+0LvQtdC5INC4INC+0YLQstC10YfQsNC10YIg0L3QsCDQstC+0L/RgNC+0YE6IMKr0JXRgdGC0Ywg0LvQuCDQt9C00LXRgdGMINGF0L7RgtGPINCx0Ysg0L7QtNC90L4g0L/QvtC70LUsINC60L7RgtC+0YDQvtC1INC90LUg0L/RgNC+0YjQu9C+INCy0LDQu9C40LTQsNGG0LjRjj/Cuy5cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XG4gICAgfSk7XG4gIH1cblxuICBfZGlzYWJsZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBfZW5hYmxlQnV0dG9uKCkge1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICAvL9GE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0LHQu9C+0LrQuNGA0L7QstC60YMg0LrQvdC+0L/QutC4IMKr0J7RgtC/0YDQsNCy0LjRgtGMwrsuXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbmFibGVCdXR0b24oKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IgKHBvcHVwKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cDtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIC8v0YHQu9GD0YjQsNGC0LXQu9GMINC60LvQsNCy0LjQsNGC0YPRgNGLINC90LDQtNC+INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDRgtGMINC4INGD0LTQsNC70Y/RgtGMLCDRgtCw0Log0LrQsNC6INC+0L0g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINC90LAg0LLQtdGB0Ywg0LTQvtC60YPQvNC10L3Rgi5cbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlLWJ1dHRvbicpIHx8ZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cFwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFxuLy/QodC+0LfQtNCw0LnRgtC1INC60LvQsNGB0YEgUG9wdXAsINC60L7RgtC+0YDRi9C5INC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwLiDQrdGC0L7RgiDQutC70LDRgdGBOlxuLy8g0J/RgNC40L3QuNC80LDQtdGCINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INC/0LDRgNCw0LzQtdGC0YAg4oCUINGB0LXQu9C10LrRgtC+0YAg0L/QvtC/0LDQv9CwLlxuLy8g0KHQvtC00LXRgNC20LjRgiDQv9GD0LHQu9C40YfQvdGL0LUg0LzQtdGC0L7QtNGLIG9wZW4g0LggY2xvc2UsINC60L7RgtC+0YDRi9C1INC+0YLQstC10YfQsNGO0YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwLlxuLy8g0KHQvtC00LXRgNC20LjRgiDQv9GA0LjQstCw0YLQvdGL0Lkg0LzQtdGC0L7QtCBfaGFuZGxlRXNjQ2xvc2UsINC60L7RgtC+0YDRi9C5INGB0L7QtNC10YDQttC40YIg0LvQvtCz0LjQutGDINC30LDQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwINC60LvQsNCy0LjRiNC10LkgRXNjLlxuLy8g0KHQvtC00LXRgNC20LjRgiDQv9GD0LHQu9C40YfQvdGL0Lkg0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycywg0LrQvtGC0L7RgNGL0Lkg0LTQvtCx0LDQstC70Y/QtdGCINGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsC5cbi8v0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGC0LDQutC20LUg0LfQsNC60YDRi9Cy0LDQtdGC0YHRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC30LDRgtC10LzQvdGR0L3QvdGD0Y4g0L7QsdC70LDRgdGC0Ywg0LLQvtC60YDRg9CzINGE0L7RgNC80YsuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmNsYXNzIFBvcHVwV2l0aENvbmZpcm1hdGlvbiBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXApIHtcbiAgICBzdXBlcihwb3B1cCk7XG4gICAgdGhpcy5fcG9wdXAgPSBwb3B1cDtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgfVxuXG4gIG9wZW4oaWQpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxuXG4gIHNldEFjdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KHRoaXMuX2lkKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoQ29uZmlybWF0aW9uO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuXG4gIGNvbnN0cnVjdG9yICh7cG9wdXAsIGhhbmRsZUZvcm1TdWJtaXR9KSB7XG4gICAgc3VwZXIocG9wdXApO1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0JykpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcignLnBvcHVwX19zdWJtaXQnKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25UZXh0ID0gdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50O1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIC8vINGB0L7Qt9C00LDRkdC8INC/0YPRgdGC0L7QuSDQvtCx0YrQtdC60YJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyINGN0YLQvtGCINC+0LHRitC10LrRgiDQt9C90LDRh9C10L3QuNGPINCy0YHQtdGFINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pXG4gICAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjQuVxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgfSk7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIHJlbmRlckxvYWRpbmcoaXNMb2FkaW5nLCBsb2FkaW5nVGV4dD0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJykge1xuICAgIGlmKGlzTG9hZGluZykge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gbG9hZGluZ1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMuX3N1Ym1pdEJ1dHRvblRleHQ7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEZvcm1cblxuLy8g0KHQvtC30LTQsNC50YLQtSDQutC70LDRgdGBIFBvcHVwV2l0aEZvcm0sINC60L7RgtC+0YDRi9C5INC90LDRgdC70LXQtNGD0LXRgiDQvtGCIFBvcHVwLiDQrdGC0L7RgiDQutC70LDRgdGBOlxuLy8g0JrRgNC+0LzQtSDRgdC10LvQtdC60YLQvtGA0LAg0L/QvtC/0LDQv9CwINC/0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC60L7Qu9Cx0Y3QuiDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLLlxuLy8g0KHQvtC00LXRgNC20LjRgiDQv9GA0LjQstCw0YLQvdGL0Lkg0LzQtdGC0L7QtCBfZ2V0SW5wdXRWYWx1ZXMsINC60L7RgtC+0YDRi9C5INGB0L7QsdC40YDQsNC10YIg0LTQsNC90L3Ri9C1INCy0YHQtdGFINC/0L7Qu9C10Lkg0YTQvtGA0LzRiy5cbi8vINCf0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMuINCc0LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMg0LrQu9Cw0YHRgdCwXG4vLyAgIFBvcHVwV2l0aEZvcm0g0LTQvtC70LbQtdC9INC90LUg0YLQvtC70YzQutC+INC00L7QsdCw0LLQu9GP0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPLCDQvdC+INC4INC00L7QsdCw0LLQu9GP0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQulxuLy8gICDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLLlxuLy8g0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBjbG9zZSwg0YLQsNC6INC60LDQuiDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQv9C+0L/QsNC/0LAg0YTQvtGA0LzQsCDQtNC+0LvQttC90LAg0LXRidGRINC4INGB0LHRgNCw0YHRi9Cy0LDRgtGM0YHRjy5cbi8vINCU0LvRjyDQutCw0LbQtNC+0LPQviDQv9C+0L/QsNC/0LAg0YHQvtC30LTQsNCy0LDQudGC0LUg0YHQstC+0Lkg0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCBQb3B1cFdpdGhGb3JtLlxuXG5cbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yIChwb3B1cCkge1xuICAgIHN1cGVyKHBvcHVwKVxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX192aWV3LWltYWdlJyksXG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2FwdGlvbicpXG4gIH1cblxuICBvcGVuKHtsaW5rLCBuYW1lfSkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX2ltYWdlLmFsdCA9IG5hbWU7XG4gICAgdGhpcy5fY2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2VcblxuLy8g0KHQvtC30LTQsNC50YLQtSDQutC70LDRgdGBIFBvcHVwV2l0aEltYWdlLCDQutC+0YLQvtGA0YvQuSDQvdCw0YHQu9C10LTRg9C10YIg0L7RgiBQb3B1cC4g0K3RgtC+0YIg0LrQu9Cw0YHRgSDQtNC+0LvQttC10L0g0L/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0YLRjFxuLy8g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgb3Blbi4g0JIg0LzQtdGC0L7QtNC1IG9wZW4g0LrQu9Cw0YHRgdCwIFBvcHVwV2l0aEltYWdlINC90YPQttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINCyINC/0L7Qv9Cw0L9cbi8vINC60LDRgNGC0LjQvdC60YMg0YEgc3JjINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0Lgg0L/QvtC00L/QuNGB0YzRjiDQuiDQutCw0YDRgtC40L3QutC1LiIsImNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW0sIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHByZXBlbmRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKTtcbiAgfVxuICBhcHBlbmRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGl0ZW0pO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoYXJyKSB7XG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4vL9CjINC60LvQsNGB0YHQsCBTZWN0aW9uINC90LXRgiDRgdCy0L7QtdC5INGA0LDQt9C80LXRgtC60LguINCe0L0g0L/QvtC70YPRh9Cw0LXRgiDRgNCw0LfQvNC10YLQutGDINGH0LXRgNC10Lcg0YTRg9C90LrRhtC40Y4t0LrQvtC70LHRjdC6INC4INCy0YHRgtCw0LLQu9GP0LXRgiDQtdGRINCyINC60L7QvdGC0LXQudC90LXRgC5cbiIsIlxuY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3RvciAoe25hbWUsIGRlc2NyaXB0aW9uLCBhdmF0YXJ9KSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9hdmF0YXIgPSBhdmF0YXI7XG4gIH1cblxuICBnZXRVc2VySW5mbygpe1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50LFxuICAgICAgYXZhdGFyOiB0aGlzLl9hdmF0YXIuc3JjXG4gICAgfVxuICB9XG5cbiAgc2V0VXNlckluZm8oe25hbWUsIGFib3V0LCBhdmF0YXJ9KSB7XG4gICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICB0aGlzLl9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGFib3V0O1xuICAgICB0aGlzLl9hdmF0YXIuc3JjID0gYXZhdGFyO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvXG5cbi8vINCh0L7Qt9C00LDQudGC0LUg0LrQu9Cw0YHRgSBVc2VySW5mb1xuLy8g0JrQu9Cw0YHRgSBVc2VySW5mbyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0YPQv9GA0LDQstC70LXQvdC40LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUuINCt0YLQvtGCINC60LvQsNGB0YE6XG4vLyDQn9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQvtCx0YrQtdC60YIg0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCDQtNCy0YPRhSDRjdC70LXQvNC10L3RgtC+0LI6INGN0LvQtdC80LXQvdGC0LAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0Lgg0Y3Qu9C10LzQtdC90YLQsFxuLy8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YHQtdCx0LUuXG4vLyDQodC+0LTQtdGA0LbQuNGCINC/0YPQsdC70LjRh9C90YvQuSDQvNC10YLQvtC0IGdldFVzZXJJbmZvLCDQutC+0YLQvtGA0YvQuSDQstC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIg0YEg0LTQsNC90L3Ri9C80Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLiDQrdGC0L7RgiDQvNC10YLQvtC0XG4vLyDQv9GA0LjQs9C+0LTQuNGC0YHRjyDQutC+0LPQtNCwINC00LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L3Rg9C20L3QviDQsdGD0LTQtdGCINC/0L7QtNGB0YLQsNCy0LjRgtGMINCyINGE0L7RgNC80YMg0L/RgNC4INC+0YLQutGA0YvRgtC40LguXG4vLyDQodC+0LTQtdGA0LbQuNGCINC/0YPQsdC70LjRh9C90YvQuSDQvNC10YLQvtC0IHNldFVzZXJJbmZvLCDQutC+0YLQvtGA0YvQuSDQv9GA0LjQvdC40LzQsNC10YIg0L3QvtCy0YvQtSDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC4INC00L7QsdCw0LLQu9GP0LXRgiDQuNGFINC90LAg0YHRgtGA0LDQvdC40YbRgy5cbiIsImNvbnN0IG9wdGlvbnNBcGkgPSB7XG4gIHVybDogJ2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNzUnLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogJzlmYzg0ZDBjLWIyNzEtNDdmYi1hNjFkLTc0MjU1YmQ2YTgxNCcsXG4gICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIH1cbn1cblxuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBuYW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBqb2JWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5jb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuXG5jb25zdCBwb3B1cEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2VkaXRcIik7XG5jb25zdCBuYW1lSW5wdXQgPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfbmFtZV90eXBlZFwiKTtcbmNvbnN0IGpvYklucHV0ID0gcG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X2Rlc2NyaXB0aW9uX3R5cGVkXCIpO1xuXG5jb25zdCBwb3B1cEFkZFBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2FkZF9waWN0dXJlXCIpO1xuY29uc3QgcG9wdXBGdWxsVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdmlld19mdWxsXCIpO1xuY29uc3QgcG9wdXBDb25maXJtZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfY29uZmlybWVkXCIpO1xuY29uc3QgcG9wdXBBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfYXZhdGFyXCIpO1xuXG5jb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0X2luYWN0aXZlJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X2ludmFsaWQnLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZScsXG59O1xuXG5leHBvcnQge29wdGlvbnNBcGksIHZhbGlkYXRpb25TZXR0aW5ncywgZWRpdEJ1dHRvbiwgbmFtZVZhbHVlLCBqb2JWYWx1ZSxcbiAgcHJvZmlsZUF2YXRhcixcbiAgcG9wdXBFZGl0LFxuICBuYW1lSW5wdXQsIGpvYklucHV0LCBhZGRCdXR0b24sIHBvcHVwQWRkUGljdHVyZSwgcG9wdXBGdWxsVmlldyxcbnBvcHVwQ29uZmlybWVkLCBwb3B1cEF2YXRhcn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7IC8vINC00L7QsdCw0LLRjNGC0LUg0LjQvNC/0L7RgNGCINCz0LvQsNCy0L3QvtCz0L4g0YTQsNC50LvQsCDRgdGC0LjQu9C10LlcbmltcG9ydCB7XG4gIG9wdGlvbnNBcGksXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdEJ1dHRvbixcbiAgbmFtZVZhbHVlLFxuICBqb2JWYWx1ZSxcbiAgcHJvZmlsZUF2YXRhcixcbiAgcG9wdXBFZGl0LFxuICBuYW1lSW5wdXQsXG4gIGpvYklucHV0LFxuICBhZGRCdXR0b24sXG4gIHBvcHVwQWRkUGljdHVyZSxcbiAgcG9wdXBGdWxsVmlldyxcbiAgcG9wdXBDb25maXJtZWQsXG4gIHBvcHVwQXZhdGFyLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybWF0aW9uLmpzXCI7XG5cbi8vU0VDVElPTlxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKG9wdGlvbnNBcGkpO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJkKGl0ZW0pIHtcbiAgY29uc3QgY2FyZCA9IGdlbmVyYXRlQ2FyZChpdGVtKTtcbiAgY2FyZFNlY3Rpb24uYXBwZW5kSXRlbShjYXJkKTtcbn1cblxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGl0ZW1zOiBvcHRpb25zQXBpLFxuICAgIHJlbmRlcmVyOiByZW5kZXJDYXJkLFxuICB9LFxuICBcIi5lbGVtZW50c1wiXG4pO1xuXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRDYXJkTGlzdCgpXSlcbiAgLnRoZW4oKFtkYXRhLCBjYXJkc10pID0+IHtcbiAgICB1c2VySWQgPSBkYXRhLl9pZDtcbiAgICB1c2VyRGF0YS5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICBjYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhjYXJkcyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbi8vUE9QVVAgQUREIFBMQUNFXG5jb25zdCBwb3B1cEFkZFBsYWNlID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cDogcG9wdXBBZGRQaWN0dXJlLFxuICBoYW5kbGVGb3JtU3VibWl0OiBoYW5kbGVBZGRTdWJtaXQsXG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQWRkU3VibWl0KGZvcm1JdGVtKSB7XG4gIHBvcHVwQWRkUGxhY2UucmVuZGVyTG9hZGluZyh0cnVlKTtcbiAgYXBpXG4gICAgLmNyZWF0ZUNhcmRBcGkoZm9ybUl0ZW0pXG4gICAgLnRoZW4oKGNhcmREYXRhKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZ2VuZXJhdGVDYXJkKGNhcmREYXRhKTtcbiAgICAgIGNhcmRTZWN0aW9uLnByZXBlbmRJdGVtKGNhcmQpO1xuICAgICAgcG9wdXBBZGRQbGFjZS5jbG9zZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGBXaGF0cyB0aGUgJHtlcnJ9YCkpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcG9wdXBBZGRQbGFjZS5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbn1cblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQWRkUGxhY2Uub3BlbigpO1xuICB2YWxpZGF0aW9uRWRpdFBvcHVwLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG59KTtcblxucG9wdXBBZGRQbGFjZS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vL1VTRVJfUE9QVVBcbmxldCB1c2VySWQ7XG5cbmNvbnN0IHVzZXJEYXRhID0gbmV3IFVzZXJJbmZvKHtcbiAgbmFtZTogbmFtZVZhbHVlLFxuICBkZXNjcmlwdGlvbjogam9iVmFsdWUsXG4gIGF2YXRhcjogcHJvZmlsZUF2YXRhcixcbn0pO1xuXG5jb25zdCB1c2VySW5mb1BvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cDogcG9wdXBFZGl0LFxuICBoYW5kbGVGb3JtU3VibWl0OiBoYW5kbGVVc2VyU3VibWl0LFxufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZVVzZXJTdWJtaXQoZGF0YSkge1xuICB1c2VySW5mb1BvcHVwLnJlbmRlckxvYWRpbmcodHJ1ZSk7XG5cbiAgYXBpXG4gICAgLnBhdGNoVXNlckluZm8oZGF0YSlcblxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB1c2VyRGF0YS5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICAgIHVzZXJJbmZvUG9wdXAuY2xvc2UoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhgV2hhdHMgdGhlICR7ZXJyfWApKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHVzZXJJbmZvUG9wdXAucmVuZGVyTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG59XG5cbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdXNlckluZm9Qb3B1cC5vcGVuKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VyRGF0YS5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VyLm5hbWU7XG4gIGpvYklucHV0LnZhbHVlID0gdXNlci5kZXNjcmlwdGlvbjtcbn0pO1xuXG51c2VySW5mb1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vVVNFUl9BVkFUQVJcbnByb2ZpbGVBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdXNlckF2YXRhci5vcGVuKCk7XG59KTtcblxuY29uc3QgdXNlckF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgcG9wdXA6IHBvcHVwQXZhdGFyLFxuICBoYW5kbGVGb3JtU3VibWl0OiBoYW5kbGVVc2VyQXZhdGFyLFxufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZVVzZXJBdmF0YXIoZGF0YSkge1xuICB1c2VyQXZhdGFyLnJlbmRlckxvYWRpbmcodHJ1ZSk7XG5cbiAgYXBpXG4gICAgLnBhdGNoQXZhdGFyKGRhdGEpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHVzZXJEYXRhLnNldFVzZXJJbmZvKGRhdGEpO1xuICAgICAgdXNlckF2YXRhci5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coYFdoYXRzIHRoZSAke2Vycn1gKSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICB1c2VyQXZhdGFyLnJlbmRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xufVxuXG51c2VyQXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vUE9QVVBfRlVMTC1WSUVXISDQntGC0LrRgNGL0YLQuNC1IGluIGNsYXNzIENhcmQhXG5jb25zdCBwb3B1cEZ1bGxQaWN0dXJlID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwRnVsbFZpZXcpO1xuXG5mdW5jdGlvbiBoYW5kbGVDbGlja1BvcHVwKGRhdGEpIHtcbiAgcG9wdXBGdWxsUGljdHVyZS5vcGVuKGRhdGEpO1xufVxuXG5wb3B1cEZ1bGxQaWN0dXJlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vUE9QVVBfQ09ORklSTUFUSU9OXG5jb25zdCBwb3B1cENvbmZpcm1hdGlvbiA9IG5ldyBQb3B1cFdpdGhDb25maXJtYXRpb24ocG9wdXBDb25maXJtZWQpO1xuXG5wb3B1cENvbmZpcm1hdGlvbi5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vL1JFTkRFUi9HRU5FUkFURV9DQVJEXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmQoaXRlbSkge1xuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXG4gICAgaXRlbSxcblxuICAgIFwiLnBpY3R1cmUtdGVtcGxhdGVfdHlwZV9kZWZhdWx0XCIsXG5cbiAgICAoZGF0YSkgPT4gaGFuZGxlQ2xpY2tQb3B1cChkYXRhKSxcblxuICAgIChjYXJkKSA9PiB7XG4gICAgICBwb3B1cENvbmZpcm1hdGlvbi5vcGVuKGNhcmQuX2lkKTtcbiAgICAgIHBvcHVwQ29uZmlybWF0aW9uLnNldEFjdGlvbigoaWQpID0+IHtcbiAgICAgICAgYXBpXG4gICAgICAgICAgLmRlbGV0ZUNhcmRBcGkoaWQpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2FyZC5kZWxldGVDYXJkKCk7XG4gICAgICAgICAgICBwb3B1cENvbmZpcm1hdGlvbi5jbG9zZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGBXaGF0cyB0aGUgJHtlcnJ9YCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHVzZXJJZCxcblxuICAgIChpZCkgPT4ge1xuICAgICAgYXBpXG4gICAgICAgIC5wdXRMaWtlKGlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNhcmQuc2V0TGlrZXMoZGF0YS5saWtlcyk7XG4gICAgICAgICAgY2FyZC5hZGRMaWtlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhgV2hhdHMgdGhlICR7ZXJyfWApKTtcbiAgICB9LFxuXG4gICAgKGlkKSA9PiB7XG4gICAgICBhcGlcbiAgICAgICAgLmRlbGV0ZUxpa2UoaWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY2FyZC5zZXRMaWtlcyhkYXRhLmxpa2VzKTtcbiAgICAgICAgICBjYXJkLnJlbW92ZUxpa2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGBXaGF0cyB0aGUgJHtlcnJ9YCkpO1xuICAgIH1cbiAgKTtcblxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuY3JlYXRlQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbi8vVkFMSURBVElPTlxuLy/QsiBpbmRleC5qcyDRgdC+0LfQtNCw0LXRgtGB0Y8g0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCDQuCDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQtdCz0L4g0LzQtdGC0L7QtCDQtNC70Y8g0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC8XG5cbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5mb3Jtcy5wcm9maWxlO1xuY29uc3QgdmFsaWRhdGlvbkFkZFBvcHVwID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzLCBhZGRGb3JtKTtcbnZhbGlkYXRpb25BZGRQb3B1cC5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IHBpY3R1cmVGb3JtID0gZG9jdW1lbnQuZm9ybXMucGljdHVyZTtcbmNvbnN0IHZhbGlkYXRpb25FZGl0UG9wdXAgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHBpY3R1cmVGb3JtKTtcbnZhbGlkYXRpb25FZGl0UG9wdXAuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBhdmF0YXJGb3JtID0gZG9jdW1lbnQuZm9ybXMuYXZhdGFyO1xuY29uc3QgdmFsaWRhdGlvbkF2YXRhclBvcHVwID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzLCBhdmF0YXJGb3JtKTtcbnZhbGlkYXRpb25BdmF0YXJQb3B1cC5lbmFibGVWYWxpZGF0aW9uKCk7XG4iXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsInVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdXJsIiwiX2hlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9zZW5kUmVxdWVzdCIsIm9wdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJFcnJvciIsImdldENhcmRMaXN0IiwiY29uY2F0IiwibWV0aG9kIiwiY3JlYXRlQ2FyZEFwaSIsImNhcmREYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVDYXJkQXBpIiwiaWQiLCJnZXRVc2VySW5mbyIsInBhdGNoVXNlckluZm8iLCJkYXRhIiwibmFtZSIsImFib3V0IiwicGF0Y2hBdmF0YXIiLCJhdmF0YXIiLCJsaW5rIiwicHV0TGlrZSIsImRlbGV0ZUxpa2UiLCJDYXJkIiwidGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJoYW5kbGVEZWxldGVDbGljayIsInVzZXJJZCIsImhhbmRsZUxpa2VDbGljayIsImhhbmRsZURlbGV0ZUxpa2VJY29uIiwiX25hbWUiLCJfbGluayIsIl9pZCIsIl9vd25lcklkIiwib3duZXIiLCJfbGlrZXMiLCJsaWtlcyIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX3VzZXJJZCIsIl9nZXRUZW1wbGF0ZSIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfc2V0RGF0YSIsIl9idXR0b25MaWtlIiwiX25ld0NhcmQiLCJfbGlrZUNvdW50ZXIiLCJfZWxlbWVudENhcHRpb24iLCJ0ZXh0Q29udGVudCIsIl9lbGVtZW50SW1hZ2UiLCJzcmMiLCJhbHQiLCJsZW5ndGgiLCJfY2hlY2tEZWxldGVCdXR0b25WaXNpYmlsaXR5IiwiX2RlbGV0ZUJ1dHRvbiIsInJlbW92ZSIsIl9oYW5kbGVEZWxldGVCdXR0b24iLCJkZWxldGVDYXJkIiwiYWRkTGlrZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUxpa2UiLCJzZXRMaWtlcyIsIl9zZXRMaWtlQnV0dG9uSW5pdGlhbFN0YXRlIiwiaXNMaWtlZCIsIl90aGlzIiwic29tZSIsImhhbmRsZUxpa2VDYXJkIiwiY29udGFpbnMiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQ2FyZCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmb3JFYWNoIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJlbmFibGVWYWxpZGF0aW9uIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9kaXNhYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJfZW5hYmxlQnV0dG9uIiwiUG9wdXAiLCJwb3B1cCIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJQb3B1cFdpdGhDb25maXJtYXRpb24iLCJfUG9wdXAiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjYWxsIiwiX2Zvcm0iLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwic2V0QWN0aW9uIiwiY2FsbGJhY2siLCJfaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9zdWJtaXRCdXR0b24iLCJfc3VibWl0QnV0dG9uVGV4dCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2dldElucHV0VmFsdWVzIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsIl90aGlzMyIsInJlc2V0IiwicmVuZGVyTG9hZGluZyIsImlzTG9hZGluZyIsImxvYWRpbmdUZXh0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfY2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW0iLCJyZW5kZXJlciIsIl9pdGVtIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInByZXBlbmRJdGVtIiwicHJlcGVuZCIsImFwcGVuZEl0ZW0iLCJhcHBlbmQiLCJyZW5kZXJJdGVtcyIsImFyciIsIlVzZXJJbmZvIiwiZGVzY3JpcHRpb24iLCJfZGVzY3JpcHRpb24iLCJfYXZhdGFyIiwic2V0VXNlckluZm8iLCJfcmVmMiIsIm9wdGlvbnNBcGkiLCJhdXRob3JpemF0aW9uIiwiZWRpdEJ1dHRvbiIsIm5hbWVWYWx1ZSIsImpvYlZhbHVlIiwicHJvZmlsZUF2YXRhciIsImFkZEJ1dHRvbiIsInBvcHVwRWRpdCIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wdXBBZGRQaWN0dXJlIiwicG9wdXBGdWxsVmlldyIsInBvcHVwQ29uZmlybWVkIiwicG9wdXBBdmF0YXIiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJhcGkiLCJyZW5kZXJDYXJkIiwiY2FyZCIsImdlbmVyYXRlQ2FyZCIsImNhcmRTZWN0aW9uIiwiaXRlbXMiLCJQcm9taXNlIiwiYWxsIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXJkcyIsInVzZXJEYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicG9wdXBBZGRQbGFjZSIsImhhbmRsZUFkZFN1Ym1pdCIsImZvcm1JdGVtIiwiZmluYWxseSIsInZhbGlkYXRpb25FZGl0UG9wdXAiLCJ1c2VySW5mb1BvcHVwIiwiaGFuZGxlVXNlclN1Ym1pdCIsInVzZXIiLCJ1c2VyQXZhdGFyIiwiaGFuZGxlVXNlckF2YXRhciIsInBvcHVwRnVsbFBpY3R1cmUiLCJoYW5kbGVDbGlja1BvcHVwIiwicG9wdXBDb25maXJtYXRpb24iLCJjYXJkRWxlbWVudCIsImFkZEZvcm0iLCJmb3JtcyIsInByb2ZpbGUiLCJ2YWxpZGF0aW9uQWRkUG9wdXAiLCJwaWN0dXJlRm9ybSIsInBpY3R1cmUiLCJhdmF0YXJGb3JtIiwidmFsaWRhdGlvbkF2YXRhclBvcHVwIl0sInNvdXJjZVJvb3QiOiIifQ==