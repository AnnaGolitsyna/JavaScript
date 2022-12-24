// algo
// input - arr[string, ...]
// output - promise => [blog.url, ...]
// iterate users => output user.blog
// create request all users
// throw if error in any request

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async users => {
  const reposBlogs = users.map(user =>  fetch(`https://api.github.com/users/${user}`)
      .then(resp => resp.json())
      .then(data => data.blog));
  const userBlog = await Promise.all(reposBlogs);
  return userBlog;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
