// algo
// create baseUrl +++
// 1. f getUsersList - server request +++
// * input - none, output - promise (all users)
// 2. f getUserById +++
// * input - userId, output - promise {userId}
// 3. f createUser +++
// * input - {newUserData}, output - promise
// 4. f updateUser +++
// * input - userId, {userId}, output - promise
// 5. f deleteUser
// * input - userId, {userId}, output - promise

const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/users';

function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, { method: 'DELETE' }).then(response => response.json());
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

// examples

getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('4').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('11', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('12').then(() => {
//   console.log('User deleted');
// });
