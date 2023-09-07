
class UserInfo {
  constructor ({userName, userDescription}) {
    this._name = userName;
    this._description = userDescription
  }

  getUserInfo(){
    return {
      userName: this._name.textContent,
      userDescription: this._description.textContent
    }
  }

  setUserInfo({name, description}) {
     this._name.textContent = name;
     this._description.textContent = description;
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
