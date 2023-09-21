class Section {

  constructor ({item, renderer}, containerSelector) {
    this._item = item;
    this._renderer = renderer;
    this._containerSelector= document
      .querySelector(containerSelector);

  }


  addItem (item) {
    this._containerSelector.prepend(item);
  }

  renderItems(arr) {
    arr.forEach((item) => {
      this._renderer(item);
      });
  }

}

export default Section
//У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.