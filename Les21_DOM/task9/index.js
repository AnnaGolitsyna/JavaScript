// algo
// create f finishList
// find el .list
// iterate .list => if don't find num - create/append him + text/num/
// * list = 1-8
// export f

export const finishList = () => {
  const listElem = document.querySelector('.list');
  const listItemElem = document.querySelectorAll('li');
  console.log(listItemElem);
  const newItemElem = document.createElement('li');
  console.log(newItemElem);
  listElem.prepend((newItemElem.textContent = '1'));
  console.log(listElem);
  const middleItem = document.querySelector('.special');
  console.log(middleItem);
  middleItem.before((newItemElem.textContent = '4'));
  middleItem.after((newItemElem.textContent = '6'));
  listElem.append((newItemElem.textContent = '8'));
};

// finishList();
