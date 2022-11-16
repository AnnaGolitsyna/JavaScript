// algo
// add .list__inem in the page
// create f renderTasks => draw in the DOM
// * input - arr[tasks]
// * output - undefined
// use filter - for new tasks

'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  const taskListElems = tasksList.map(({ text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxElem, text);
    console.log(listItemElem);
    return listItemElem;
  });
  console.log(taskListElems);
  listElem.append(...taskListElems);
};

renderTasks(tasks);

// export { tasks, renderTasks }
