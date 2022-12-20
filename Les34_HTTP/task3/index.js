// algo
// create DOMelems - .login-form, .submit-button +++
// submit-button default disabled => reportValidity +++
// create event => click submit-button - PUT request to server +++
// and GET request to alert {} => Object.fromEntries +++
// clear all form fields +++

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

const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/logins';

const saveLoginData = loginData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(loginData),
  });

const getLoginForm = () => fetch(baseUrl).then(response => response.json());

const onFormSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElems));

  console.log(formData);
  alert(JSON.stringify(formData));
  saveLoginData(formData);
  // .then(() => getLoginForm())
  // .then(data => alert(JSON.parse(data[data.length - 1])));
  formElems.reset();
};

formElems.addEventListener('submit', onFormSubmit);
