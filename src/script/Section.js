class Section {

  constructor ({items, renderer}, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._containerSelector= document
      .querySelector(containerSelector);

  }


  addItem (item) {
    this._containerSelector.prepend(item);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
      });
  }

}

export default Section
//У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.