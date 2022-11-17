// algo
// 1. create f createButton => input string 'buttonText'
// f create DOM el => append in body /but+text/
// use textContent
// export f

export const createButton = buttonText => {
  const main = document.querySelector('body');
  const but = document.createElement('button');
  but.textContent = `${buttonText}`;
  main.append(but);
};

// createButton('Send Email');
