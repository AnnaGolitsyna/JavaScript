import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

export const creatListElem = ({text, done, id}) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    checkbox.dataset.id = id;
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);
    return listItemElem;
}

export const renderTasks = () => {
  //   const listItemElems = document.querySelectorAll('.list__item');
  //   listItemElems.forEach(el => el.remove());
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || b.time - a.time)
    .map(creatListElem);

  listElem.append(...tasksElems);
};

// renderTasks(tasks);
