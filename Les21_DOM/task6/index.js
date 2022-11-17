// algo
// use querySelector
// create f setButton => input - buttonText /string/
// * find body - set el button
// * use m innerHTML
// export f
// test - use textContent

export const setButton = buttonText => {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;

};



// setButton('let');
