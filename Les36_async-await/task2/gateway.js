// 3. create request to server(url) fetcnUserData =>
// * input - userName(input.value), output - response.json() +++
// 5. create fetchRepositoris =>
// input - reposUrl, output - 30 repos +++

export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};

export const fetchRepositoris = async url => {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};
