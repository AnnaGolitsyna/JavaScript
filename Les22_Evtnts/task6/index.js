// algo

const buttonElem = document.querySelector('.single-use-btn');

function clickText () {
  console.log('clicked');
  buttonElem.removeEventListener('click', clickText);
}


buttonElem.addEventListener('click', clickText);





