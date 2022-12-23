// algo
// input - userId string
// output - data user or null if err=404
// catch - err 'Failed to get user data'
// make request => github

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));
