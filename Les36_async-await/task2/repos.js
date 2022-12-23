// 5.1 create renderRepos => input - reposList
// * create DOM el - .repo-list +++
// * iterate reposList => +++
// * create/return el - li +++
// * add class .repo-list__item +++
// * textContent = name +++
// * append(...result) +++
// 5.2 clear .repo-list

const ListElems = document.querySelector('.repo-list');

export const cleanReposList = () => {
  ListElems.innerHTML = '';
};

export const renderRepos = reposList => {
  const reposListElem = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;
    
    return listElem;
  });
  ListElems.append(...reposListElem);
};
