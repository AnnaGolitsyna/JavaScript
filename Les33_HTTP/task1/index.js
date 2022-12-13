// algo
// create DOM els .user__avatar, .user__name, .user__location, +++
// * .name-form__btn, .name-form__input +++
// create handler => click .name-form__btn + text .name-form__input
// create f1 for event => get inputValue, make request(f2), append info(f3)
// f1 => onSearchUser
// f2 => fetchUserData +++
// f3 => renderUserData

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);
