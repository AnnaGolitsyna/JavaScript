// 1. create DOM elems => .user__avatar, .user__name, .user__location,
// * name-form__btn, name-form__input +++
// 4. create renderUserData =>
// * input - userData(from request) => server response => avatar_url, name, location, repos_url
// * add to page => .user__avatar, .user__name, .user__location


const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
