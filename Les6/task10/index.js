const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr];
};
console.log(cloneArr([1, 2, 3, 4, 5])); 
