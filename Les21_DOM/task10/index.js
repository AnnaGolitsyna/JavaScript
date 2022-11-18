// algo
// create f finishForm /export +++
// *prepend input 'name='Login'' +++
// *change type => password +++

export const finishForm = () => {
  const form = document.querySelector('.login-form');

  const inputPassw = document.querySelector('input');

  inputPassw.setAttribute('type', 'password');

  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');
  form.prepend(inputLogin);
};
// finishForm();
