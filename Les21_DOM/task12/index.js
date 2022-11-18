// algo
// create f squaredNumbers - export
// find el cl .number
// f read num -> num**2 -> in another data-atr.

export const squaredNumbers = () => {
  const elems = document.querySelectorAll('.number');
  const arrElems = Array.from(elems);

  arrElems.map(el => {
    const num = el.dataset.number;
    return (el.dataset.squaredNumber = num ** 2);
  });
};

// squaredNumbers();
