// algo
// use m querySelector
// create f setTitle => input - 'text' string
// * find el .title => add 'text', use textContent
// export f


export const setTitle = text => {
    document.querySelector('.title').textContent = text;
};

