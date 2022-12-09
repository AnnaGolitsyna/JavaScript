// algo
// create f => create promise
// resolve => {name, age, userId, email} after 1000ms
// reject => if userId='broken' - err('User not found') after 500ms

'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId =>
  new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, userId, email: `${userId}@example.com` });
      }, 1000);
    }
  });

requestUserData('888lll')
  .then(data => console.log(data))
  .catch(err => console.log(err));
