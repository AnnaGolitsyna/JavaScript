// algo
// 2. create default-avatar => create {default-user} +++

// 6. create handler => btn Show, click
// * create userNameInputElem.value +++
// * fetcnUserData(request to server), renderUserData(userData) +++
// 7. spinner => befor/under request - show spinner(use .spinner_hidden) +++
// 8. add error => any error request - alert 'Failed to load data' +++

import { renderUserData } from './user.js';
import { fetchUserData, fetchRepositoris } from './gateway.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spiner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const showButtonElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositoris(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

};

showButtonElem.addEventListener('click', onSearchUser);
