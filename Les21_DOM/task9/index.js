// algo
// create f finishList
// find el .list
// iterate .list => if don't find num - create/append him + text/num/
// * list = 1-8
// export f

export const finishList = () => {
  const listElem = document.querySelector('.list');
  const listItemElem = document.querySelectorAll('li');

  const newLi1 = document.createElement('li');
  newLi1.textContent = '1';
  listElem.prepend(newLi1);

  const middleItem = document.querySelector('.special');
  const newLi4 = document.createElement('li');
  newLi4.textContent = '4';
  middleItem.before(newLi4);

  const newLi6 = document.createElement('li');
  newLi6.textContent = '6';
  middleItem.after(newLi6);

  const newLi8 = document.createElement('li');
  newLi8.textContent = '8';
  listElem.append(newLi8);
};

// finishList();
