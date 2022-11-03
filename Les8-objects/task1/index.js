// input = arr
// output = obj

const transformToObject = arr => arr.reduce((acc, element) => ({ ...acc, [element]: element }), {});

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
