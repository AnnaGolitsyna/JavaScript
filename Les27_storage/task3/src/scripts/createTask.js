import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';


export const createNewTask = () => {
  const inputTextElem = document.querySelector('.task-input');

  if (!inputTextElem.value.length) return;


  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text: inputTextElem.value,
    done: false,
    id: Math.random().toString(),
    time: Date.now(),
  });

  setItem('tasksList', newTasksList);

  inputTextElem.value = '';
  renderTasks();
};


