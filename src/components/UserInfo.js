
class UserInfo {
  constructor ({name, description, avatar}) {
    this._name = name;
    this._description = description;
    this._avatar = avatar;
  }

  getUserInfo(){
    return {
      name: this._name.textContent,
      description: this._description.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo({name, about, avatar}) {
     this._name.textContent = name;
     this._description.textContent = about;
     this._avatar.src = avatar;
  }

}
export default UserInfo

// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента
// информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод
// пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
