// algo
// create handler change => text-input

const inputElem = document.querySelector('.text-input');
// inputElem.addEventListener('change', (event) => {
//     console.log(`${event.target.value}`);
// })
inputElem.addEventListener('change', () => {
    console.log(`${inputElem.value}`);
});