// algo
// creat counter => html, css +++
// add event => '-' -1, '+' +1
// local storage counter => all open tabs

localStorage.clear();

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = event => {
  const isButton = event.target.classList.contains('counter__button');
  if (!isButton) {
    return;
  }
  const { action } = event.target.dataset;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);
  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange); // обновляет значение на других вкладках

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded); // устанавливает стартовое значение при загрузке страницы
