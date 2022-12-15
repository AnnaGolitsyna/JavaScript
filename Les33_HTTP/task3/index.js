// algo
// create f getMostActiveDevs
// => input { days:7(now-7); userID; repoId}.
// output - promise max-commits [{count:5, name:'Tom', email:'tom@example.com}, ...]
// create f request => input - none, output - promise

// 'https://api.github.com/repos/USERID/REPOID/commits?per_page=100'
const commits = 'https://jsonplaceholder.typicode.com/posts';

const getRequestAllCommits = () => fetch(commits).then(response => response.json());

const getCountPosts = () => {
  getRequestAllCommits().then(postList => {
    console.log(postList);
    const test = postList.reduce((acc, { userId }) => {
      console.log(acc);
      let count = 0;
      if (!userId) {
        console.log(acc, userId);
        count = 1;
        acc.push({ userId, times: count });
        // return acc;
      }
      count += 1;
      return acc;
    }, []);
    console.log(test);
  });
};

getCountPosts();

export const getMostActiveDevs = () => {
  console.log();
};
