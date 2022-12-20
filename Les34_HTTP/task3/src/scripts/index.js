// algo
// create DOMelems - .login-form, .submit-button +++
// submit-button default disabled => reportValidity +++
// create event => click submit-button - PUT request to server +++
// and GET request to alert {} => Object.fromEntries +++
// clear all form fields +++

import { saveLoginData, getLoginForm } from './loginsGateway.js';

const buttonElem = document.querySelector('.submit-button');
buttonElem.setAttribute('disabled', false);

const formElems = document.querySelector('.login-form');

const formChangeHandler = () => {
  if (formElems.reportValidity()) {
    buttonElem.disabled = false;
  } else {
    buttonElem.disabled = true;
  }
};
formElems.addEventListener('input', formChangeHandler, false);

const onFormSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElems));
  console.log(formData);
  formElems.reset();
  saveLoginData(formData)
    .then(() => getLoginForm())
    .then(data => alert(JSON.stringify(data[data.length - 1])));
};

formElems.addEventListener('submit', onFormSubmit);


