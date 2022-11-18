// algo
// create f finishList
// find el .list
// create f => create el newLi
// * append new li = 1-8
// export f

export const finishList = () => {
  const listElem = document.querySelector('.list');
  
  const newLi = text => {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  };

  listElem.prepend(newLi('1'));

  const middleItem = document.querySelector('.special');
  middleItem.before(newLi('4'));
  middleItem.after(newLi('6'));

  listElem.append(newLi('8'));
};

finishList();
