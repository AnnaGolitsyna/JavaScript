// 3. create request to server(url) fetcnUserData =>
// * input - userName(input.value), output - response.json() +++
// 5. create fetchRepositoris =>
// input - reposUrl, output - 30 repos +++

export const fetchUserData = userName =>  fetch(`https://api.github.com/users/${userName}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });


export const fetchRepositoris = url =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });