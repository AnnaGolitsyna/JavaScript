// algo
// add data-id to list__item +++
// func => create new task +++
// *handler Create => new task to tasks[], +++
// *delete all li => again create all li +++
// *if empty field - don't add, +++
// *clear field in the end +++
// *sort all tasks /render/ +++
// checbox => handler click /sort/

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.dataset.userId = Math.random();
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.userId = listItemElem.dataset.userId;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const btnElem = document.querySelector('.create-task-btn');

const removeElems = () => {
  const listItemElems = document.querySelectorAll('.list__item');
  listItemElems.forEach(el => el.remove());
};

function createNewTask(arr) {
  const inputTextElem = document.querySelector('.task-input');
  inputTextElem.addEventListener('change', event => {
    const valueEl = event.target.value;
    if (valueEl.length === 0) return;

    arr.push({ text: valueEl, done: false });
    inputTextElem.value = '';
    removeElems();
    renderTasks(arr);
    // return arr;
  });
}

const addNewTask = createNewTask(tasks);
btnElem.addEventListener('click', addNewTask);

const listItemElemHandler = checkboxId => {
  const itemId = document.querySelectorAll(`.list__item`);
  itemId.forEach(item => {
    if (item.dataset.userId === checkboxId) {
      item.classList.toggle('list__item_done');
    }
  });
};

const changeTasksDone = arr => {
  const check = document.querySelectorAll('.list__item-checkbox');

  check.forEach((el, i) => {
    arr[i].done = el.checked;
  });
};

listElem.addEventListener('click', event => {
  if (event.target.classList.contains('list__item-checkbox')) {
    listItemElemHandler(event.target.dataset.userId);
    changeTasksDone(tasks);
    removeElems();
    renderTasks(tasks);
  }
});


