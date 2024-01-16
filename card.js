export default class Card {
  _open = false;
  _success = false;
  constructor(container, number, action) {
    this.card = document.createElement('div');
    this.card.classList.add('closed-card');
    this.card.textContent = number;

    this.card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
        this.open = true;
        action(this);
      }
    });

    container.append(this.card);
  }

  set number(value) {
    this._number = value;
  }

  get number() {
    return this._number;
  }

  set open(value) {
    this._open = value;
    value ? (this.card.classList.add('opened-card'), this.card.classList.remove('closed-card')) : (this.card.classList.remove('opened-card'), this.card.classList.add('closed-card'));
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add('successed-card') : this.card.classList.remove('successed-card');
  }

  get success() {
    return this._success;
  }
}

export class AmazingCard extends Card {
}
