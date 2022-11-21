// algo
// create change => .task-status

const inputEl = document.querySelector('.task-status');

inputEl.addEventListener('change', (event) => {
  console.log(event.target.checked);
})