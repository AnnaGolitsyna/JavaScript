// algo
// create DOMelems - .login-form, .submit-button +++
// submit-button default disabled => reportValidity +++
// create event => click submit-button - PUT request to server +++
// and GET request to alert {} => Object.fromEntries +++
// clear all form fields +++

const buttonElem = document.querySelector('.submit-button');

const formElems = document.querySelector('.login-form');

const formChangeHandler = () => {
  if (formElems.reportValidity()) {
    buttonElem.disabled = false;
  } else {
    buttonElem.disabled = true;
  }
};
formElems.addEventListener('input', formChangeHandler, false);

const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/logins';

const saveLoginData = loginData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(loginData),
  });

const onFormSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElems));

  saveLoginData(formData)
    .then(resp => resp.json())
    .then(data => {alert(JSON.stringify(data)); formElems.reset()});
       buttonElem.setAttribute('disabled', false);
};

formElems.addEventListener('submit', onFormSubmit);
