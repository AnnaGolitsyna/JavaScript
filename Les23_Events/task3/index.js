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
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');
// const taskListId = tasks.map(elem => ({ ...elem, id: Math.random() }));
// console.log(taskListId);

const renderTasks = tasksList => {
  const listItemElems = document.querySelectorAll('.list__item');
  listItemElems.forEach(el => el.remove());

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
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
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const btnElem = document.querySelector('.create-task-btn');

function createNewTask() {
  const inputTextElem = document.querySelector('.task-input');
  inputTextElem.addEventListener('change', event => {
    const valueEl = event.target.value;
    if (valueEl.length === 0) return;

    tasks.push({ text: valueEl, done: false, id: Math.random() });
    inputTextElem.value = '';
    renderTasks(tasks);
  });
}

btnElem.addEventListener('click', createNewTask);

const listItemHandler = event => {
  if (event.target.classList.contains('list__item-checkbox')) {
    const inputEl = event.target;
    const findId = tasks.find(({ id }) => id == inputEl.dataset.id);
    findId.done = inputEl.checked;
    inputEl.closest('.list__item').classList.toggle('list__item_done');
    // console.log(taskListId);
    console.log(tasks);
    renderTasks(tasks);
  }
};

listElem.addEventListener('click', listItemHandler);
console.log(tasks);
