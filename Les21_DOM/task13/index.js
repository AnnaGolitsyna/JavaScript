// algo
// create f getSection => input - number
// * find span /data-number=num/
// => output str 'value' /data-section/ pearents cl .box

export const getSection = num => {
  const el = document.querySelector(`span[data-number='${num}']`);

  const pearent = el.closest('.box');

  return pearent.dataset.section;
}
// getSection('3');
// getSection('5');
// getSection('9');