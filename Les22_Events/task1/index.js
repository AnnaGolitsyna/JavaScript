// algo
// default => events-list - empty +++
// create elRest +++
// create f handler +++
// but Clear => clear events /default - enable/
// but Attach handlers => enable handler /default - enable/
// but Remove handlers => turns off the handler /default - enable/

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');

const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreenP = logTarget.bind(null, 'P', 'green');

const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

function addHandleClick() {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
}

addHandleClick();

const clear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const butClear = document.querySelector('.clear-btn');
butClear.addEventListener('click', clear);


const butAttach = document.querySelector('.attach-handlers-btn');
butAttach.addEventListener('click', addHandleClick);

function removeHandleClick() {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
}

const butRemove = document.querySelector('.remove-handlers-btn');
butRemove.addEventListener('click', removeHandleClick);
// handleClick();
