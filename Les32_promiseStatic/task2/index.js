// algo
// 1. create f getUserASAP - export
// * input => userID /string/
// * output => promise
// 1.2. f do request with random delay
// * create f getRandomDelay +++
// return first ansew
// 2. create arr request +++
// 3. create f request => input - url, output - promise
// * create let randomDelay
// * setTimeout => userData {name, age, source: url}

const getRandomDelay = (from, to) => from + Math.random() * (to - from);

const servers = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomDelay(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl))
  return Promise.race(requests);
};

getUserASAP('user888').then(value => console.log(value));
console.log(getUserASAP('user999'));