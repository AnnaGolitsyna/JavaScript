// algo
// use m querySelector
// create f setTitle => input - 'text' string
// * find el .title => add 'text', use textContent
// export f

export const setTitle = text => {
    const elem = document.querySelector('.title');
    elem.textContent = text;
    console.log(elem);
    return elem;
};

setTitle('Anna');


