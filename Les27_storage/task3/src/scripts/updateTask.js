import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';



export const changeClassDone = ({ target }) => {
  const isCheckbox = target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList');

  const findId = tasksList.find(({ id }) => id === target.dataset.id);
  findId.done = !findId.done;
  findId.time = Date.now();
  target.closest('.list__item').classList.toggle('list__item_done');

  setItem('tasksList', tasksList);
  renderTasks();
};


