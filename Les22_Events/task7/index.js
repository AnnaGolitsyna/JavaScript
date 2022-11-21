// algo
// create click => both btn
// create f hendleClick => both btn


function handleClick(event) {
  console.log(event.target.textContent);
}

const butElems = document.querySelectorAll('.btn');
const arrButElems = [...butElems];
arrButElems.forEach(btn => btn.addEventListener('click', handleClick));
