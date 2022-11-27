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
const taskListId = tasks.map(elem => ({ ...elem, id: Math.random() }));
console.log(taskListId);

const renderTasks = tasksList => {
  const removeElems = () => {
    const listItemElems = document.querySelectorAll('.list__item');
    listItemElems.forEach(el => el.remove());
  };
  removeElems();
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.userId = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(taskListId);

const btnElem = document.querySelector('.create-task-btn');

function createNewTask(arr) {
  const inputTextElem = document.querySelector('.task-input');
  inputTextElem.addEventListener('change', event => {
    const valueEl = event.target.value;
    if (valueEl.length === 0) return;

    arr.push({ text: valueEl, done: false, id: Math.random() });
    inputTextElem.value = '';
    renderTasks(arr);
  });
}

const addNewTask = createNewTask(taskListId);
btnElem.addEventListener('click', addNewTask);

const listItemHandler = event => {
  const inputEl = event.target;
  if (inputEl.classList.contains('list__item-checkbox')) {
    const findId = taskListId.find(({ id }) => id == inputEl.dataset.userId);
    findId.done = inputEl.checked;
    inputEl.closest('.list__item').classList.toggle('list__item_done');
    // console.log(taskListId);
    renderTasks(taskListId);
  }
};

listElem.addEventListener('click', listItemHandler);
