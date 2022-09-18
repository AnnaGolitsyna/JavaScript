const numbers = [25, 8, 2, 5, -10, 10, 6, -25];


const sortAsc = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  const numbersSort = [...array];

  for (let index = 0; index < numbersSort.length; index += 1) {
    if (numbersSort[index] > numbersSort[index + 1]) {
      const change = numbersSort[index];
      numbersSort[index] = numbersSort[index + 1];
      numbersSort[index + 1] = change;
      index = -1;
    }
  }
  console.log(numbersSort);
  return numbersSort;
};
sortAsc(numbers);

const sortDesc = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  const numbersSort = [...array];

  for (let index = 0; index < numbersSort.length; index += 1) {
    if (numbersSort[index] < numbersSort[index + 1]) {
      [numbersSort[index], numbersSort[index + 1]] = [numbersSort[index + 1], numbersSort[index]];
      index = -1;
    }
  }
  console.log(numbersSort);
  return numbersSort;
};

sortDesc(numbers);
