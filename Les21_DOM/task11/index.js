// algo
// create f manageClasses - export
// el cl .one - add cl .selected
// el cl .two - remove cl .selected
// el cl .three - toggle cl .three_done
// el cl .four - add cl .another-class /if have .some-class

export const manageClasses = () => {
  const elOne = document.querySelector('.one');
  elOne.classList.add('selected');

  const elTwo = document.querySelector('.two');
  elTwo.classList.remove('selected');

  const elThree = document.querySelector('.three');
  elThree.classList.toggle('three_done');

  const elFour = document.querySelector('.four');
  if (elFour.classList.contains('some-class')) {
    elFour.classList.add('another-class');
  }
};

// manageClasses();
