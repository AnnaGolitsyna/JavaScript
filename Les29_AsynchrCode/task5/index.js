// algo
// 1. create f => input - id /string/, callback
// output => undefined
// f => call callback with a random delay
// if userId = broken => error 'Failed to load user data'
// 2. create callback =>
// input - userId +++
// output - { userID: 'userid777', email: 'userid777'@example.com} +++
// 3. create f random daley (1-3 sec)

'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

export function getRandomDelay() {
  return Math.trunc((3000 - 1000) * Math.random() + 1000);
}

export const requestUserData = (userId, callback) => {
  const delay = getRandomDelay();
  if (userId === 'broken') {
    setTimeout(callback, delay, null, 'Failed to load user data');
  } else {
    setTimeout(callback, delay, { userId, email: userId + '@example.com' });
  }
};

const getObjUserData = userId => {
  console.log(userId);
};

console.log(requestUserData('989', getObjUserData));
console.log(requestUserData('broken', getObjUserData));
