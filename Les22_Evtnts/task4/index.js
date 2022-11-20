// algo
// create change => checkbox .task-status

const checkboxElem = document.querySelector('.task-status');

function check() {
    console.log(`${checkboxElem.checked}`);
    // console.log(`${checkboxElem.value}`);
}

check();

checkboxElem.addEventListener('change', check);