import { initTodoHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// const tasks = [
//   { text: 'Buy milk', done: false, id: '1', time: 1669643100000 },
//   { text: 'Pick up Tom from airport', done: false, id: '2', time: 1669643100010 },
//   { text: 'Visit party', done: false, id: '3', time: 1669643100020 },
//   { text: 'Visit doctor', done: true, id: '4', time: 1669643100030 },
//   { text: 'Buy meat', done: true, id: '5', time: 1669643100040 },
// ];

// const listElem = document.querySelector('.list');

// const renderTasks = tasksList => {
//   const listItemElems = document.querySelectorAll('.list__item');
//   listItemElems.forEach(el => el.remove());

//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done || b.time - a.time)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       checkbox.classList.add('list__item-checkbox');
//       checkbox.dataset.id = id;
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);
//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// renderTasks(tasks);

// const btnElem = document.querySelector('.create-task-btn');

// const createNewTask = () => {
//   const inputTextElem = document.querySelector('.task-input');
//   const taskTime = Date.now();
//   if (!inputTextElem.value.length) return;
//   tasks.push({
//     text: inputTextElem.value,
//     done: false,
//     id: Math.random().toString(),
//     time: taskTime,
//   });

//   renderTasks(tasks);
//   inputTextElem.value = '';
// };

// btnElem.addEventListener('click', createNewTask);

// const changeClassDone = ({ target }) => {
//   if (target.classList.contains('list__item-checkbox')) {
//     const taskTime = Date.now();
//     const findId = tasks.find(({ id }) => id === target.dataset.id);
//     findId.done = !findId.done;
//     findId.time = taskTime;
//     target.closest('.list__item').classList.toggle('list__item_done');
//     renderTasks(tasks);
//   }
// };

// listElem.addEventListener('click', changeClassDone);
