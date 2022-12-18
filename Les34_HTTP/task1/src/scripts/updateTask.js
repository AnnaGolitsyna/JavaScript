import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

// 1. create f onListClick
// input - event.target
// 2. if click isCheckbox => changeClassDone
// 3. if click list-item__delete-btn => deleteTask(taskGateway)
// 4. write data to server
// 5. read data
// 6. set local-storage
// 7. render

export const changeClassDone = ({ target }) => {
  const isCheckbox = target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = target.dataset.id;
  const done = target.checked;
  const tasksList = getItem('tasksList');
  const { text, time } = tasksList.find(task => task.id === taskId);

  const updatedTask = {
    text,
    time: Date.now(),
    done,
  };

  target.closest('.list-item').classList.toggle('list-item_done');

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const deletedTask = ({ target }) => {
  const isDeleteBtn = target.classList.contains('list-item__delete-btn');
 
  if (!isDeleteBtn) {
    return;
  }

  const taskId = target.dataset.id;

  deleteTask(taskId)
  .then(() => getTasksList())
  .then(newTasksList => {
    setItem('tasksList', newTasksList);
    renderTasks();
  })
};

export const onListClick = () => {};
