// algo
// create f getSection => input - number
// * find span /data-number=num/
// => output str 'value' /data-section/ pearents cl .box

export const getSection = num => {
  const el = document.querySelector(`span[data-number='${num}']`);
  console.log(el);
  const pearent = el.closest('.box');
  console.log(pearent, pearent.dataset);
  const pearentsValue = pearent.dataset.section;
  console.log(pearentsValue);
  return pearentsValue;
}
// getSection('3');
// getSection('5');
// getSection('9');