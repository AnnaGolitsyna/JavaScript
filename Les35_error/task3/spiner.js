// create DOM el - spinner
// create f showSp => del class spinner_hidden
// create f delSp => add .spinner_hidden

const spinnerElem = document.querySelector('.spinner');

export const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hidden');
};

export const hideSpinner = () => {
    spinnerElem.classList.add('spinner_hidden');
}
