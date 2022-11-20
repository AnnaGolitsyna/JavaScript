// algo
// create change => checkbox .task-status

const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', () => {
    console.log(`${checkboxElem.checked}`);
    console.log(`${checkboxElem.value}`);
})