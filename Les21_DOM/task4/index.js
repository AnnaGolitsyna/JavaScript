// algo
// use m querySelector
// create f getTitle =>
// * find el .title => output - el 'text' /textContent/
// cteate f getDescription =>
// * find el .about => output - el 'text' /innerText/
// cteate f getPlans =>
// * find el .plans => output - el 'text' /innerHTML/
// cteate f getGoal =>
// * find el .goal => output - el 'text' /outerHTML/
// export f


const getTitle = () => {
    console.log(document.querySelector('.title').textContent);
    return document.querySelector('.title').textContent;
}
getTitle();

const getDescription = () => {
    console.log(document.querySelector('.about').innerText);
    return document.querySelector('.about').innerText;
}

getDescription();

const getPlans = () => {
    console.log(document.querySelector('.plans').innerHTML);
    return document.querySelector('.plans').innerHTML;
}

getPlans();

const getGoal = () => {
    console.log(document.querySelector('.goal').outerHTML);
    return document.querySelector('.goal').outerHTML;
}

getGoal();

export {getDescription, getGoal, getPlans, getTitle};