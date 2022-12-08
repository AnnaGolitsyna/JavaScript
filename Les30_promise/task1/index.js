// algo
// create f addImage => input - url image, output - promise
// create promise =>
// resolve => {width, height}
// reject => new Error '...'

export const addImage = imgSrc => {
  const imgPromise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const getImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', getImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });
  return imgPromise;
};

const imageSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resPromise = addImage(imageSrc);

resPromise.then(({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
});


