class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _sendRequest(url, options) {
    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        //если запрос не прошел то выкидываем ошибку
        //error уже встроен
        throw new Error("Что-то не так");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCardList() {
    return this._sendRequest(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  createCardApi(cardData) {
    return this._sendRequest(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    });
  }

  deleteCardApi(id) {
    return this._sendRequest(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._sendRequest(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  patchUserInfo(data) {
    return this._sendRequest(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    });
  }

  patchAvatar(data) {
    return this._sendRequest(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
  }

  // putLike(data) {
  //   return this._sendRequest(`${this._url}/cards`, {
  //     method: "PUT",
  //     headers: this._headers,
  //     // body: JSON.stringify()
  //   })
  // }

  // deleteLike(data) {
  //   return this._sendRequest(`${this._url}/cards`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //     // body: JSON.stringify()
  //   })
  // }

  // getAllData() {
  //   Promise.all[this.getUserInfo(), putLike()]
  // }
}

export default Api;
