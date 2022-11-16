// algo
// use m querySelector
// create f getTitleElement =>
// * find el class .title => dir, return el
// create f getInputElement =>
// * find input => dir, return
// export f


const getTitleElement = () => {
    const titleElement = document.querySelector('.title');
    console.dir(titleElement);
    return titleElement;
}

getTitleElement();

const getInputElement = () => {
    const inputElem = document.querySelector('input[type=text]');
    console.dir(inputElem);
    return inputElem;
}

getInputElement();

export {getInputElement, getTitleElement}