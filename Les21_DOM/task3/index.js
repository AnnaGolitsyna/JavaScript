// algo
// use m querySelectorAll
// create f getItemsList
// * find all el .technology => dir, return
// create f getItemsArray
// * find all el .tool => add[] => dir, return
// * use Array.from(NodeList)
// export f

const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

getItemsList();

const getItemsArray = () => {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(Array.from(elementsArray));
    return Array.from(elementsArray);
}

getItemsArray();

export {getItemsArray, getItemsList}