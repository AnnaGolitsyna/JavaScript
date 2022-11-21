// algo
// create click => arr - all .pagination__page
// create f handleClick => log - data-page-number
// iterate arr => handleClick for all els

const butElems = document.querySelectorAll('.pagination__page');

function handleClick (event) {
  console.log(event.target.dataset.pageNumber);
}

butElems.forEach(btn => btn.addEventListener('click', handleClick));


