class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;

  }

  _sendRequest(url, options) {
    return fetch( url, options)
    .then((res)=>{
      if(res.ok) {
        return res.json();
      }
      //если запрос не прошел то выкидываем ошибку
      //error уже встроен
      throw new Error('Что-то не так');
    })
    .catch((err)=> {
      console.log(err);
    })

  }

  getCardList() {
    return this._sendRequest(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  createCardApi(cardData) {
    return this._sendRequest(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(cardData)
    })
  }

  deleteCardApi(id) {
    return this._sendRequest(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  getUserInfo() {
      return this._sendRequest(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

  patchUserInfo(data) {
    return this._sendRequest(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })

      })
    }

  patchAvatar(data) {
    console.log(data)
    return this._sendRequest(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
  }
}

export default Api





// //Используйте свойства name, about и avatar в соответствующих элементах шапки
// //страницы. Свойство _id — это идентификатор пользователя, в данном случае вашего.
// fetch('https://mesto.nomoreparties.co/v1/cohort-75/cards', {
//   headers: {
//     authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });

//   //У каждой карточки есть свойства name и link — это заголовок и ссылка
//   //на картинку — они понадобятся при отображении каждой отдельной карточки.
// fetch('https://mesto.nomoreparties.co/v1/cohort-75/users/me', {
//   method: 'GET',
//   headers: {
//     authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });


//   //Отредактированные данные профиля д сохр на сервере - методом PATCH
//   //В заголовках запроса - Content-Type, а в теле — JSON с двумя свойствами — name и about.
//   //Значения - обновлённые данные пользователя.
// fetch('https://mesto.nomoreparties.co/v1/cohort-75/users/me', {
//   method: 'PATCH',
//   headers: {
//     authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Marie Skłodowska Curie',
//     about: 'Physicist and Chemist'
//   })
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// //добавить на сервер новую карточку - POST-запрос
// //В заголовках - Content-Type, а в теле — JSON с двумя свойствами — name и link.
// //В name должно быть название создаваемой карточки, а в link — ссылка на картинку
// // сервер вернёт ответ с объектом новой карточки
//   fetch('https://mesto.nomoreparties.co/v1/cohort-75/cards', {
//   method: 'POST',
//   headers: {
//     authorization: '9fc84d0c-b271-47fb-a61d-74255bd6a814',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name,
//     link
//   })
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });