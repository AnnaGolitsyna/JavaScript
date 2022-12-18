import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const createNewTask = () => {
  const inputTextElem = document.querySelector('.task-input');

  const text = inputTextElem.value;

  if (!text) return;

  inputTextElem.value = '';

  // const tasksList = getItem('tasksList') || [];

  const newTask = {
    text,
    done: false,
    // id: Math.random().toString(),
    time: Date.now(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });

  // inputTextElem.value = '';
};
