// algo
// create f getMostActiveDevs
// => input { days:7(now-7); userID; repoId}.
// output - promise max-commits [{count:5, name:'Tom', email:'tom@example.com}, ...]
// create f request => input - none, output - promise

import { commits } from './test.js';

const getCount = arr => {
  const test = arr.reduce((acc, { userId }) => {
    if (!acc[userId]) {
      acc[userId] = { userId, times: 1 };
      return acc;
    }
    acc[userId].times += 1;
    return acc;
  }, {});
  console.log(Object.values(test));
};

getCount(commits);

// 'https://api.github.com/repos/USERID/REPOID/commits?per_page=100'
// const commits = 'https://api.github.com/repos/USERID/REPOID/commits?per_page=100';

// const getRequestAllCommits = () => fetch(commits).then(response => response.json());

// const getCountPosts = () => {
//   getRequestAllCommits().then(postList => {
//     console.log(postList);
//     const test = postList.reduce((acc, { userId, times }, index) => {
//       console.log(userId, acc[index]);
//       if (acc[index] === undefined) {
//         acc.push({ userId, times: 1 });
//         console.log(acc, acc[index]);
//         return acc;
//       }
//       // count += 1;

//       return acc;
//     }, []);
//     console.log(test);
//   });
// };

// getCountPosts();

// export const getMostActiveDevs = () => {
//   console.log();
// };
