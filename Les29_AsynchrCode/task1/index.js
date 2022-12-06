// algo
// f addImage - input - url, callback
// create imgEl => set atr 'alt', text; url-src img +++
// find DOM - page, append img +++
// get width, height +++
// event 'load'
// create callback - input null/error, imgElem

export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const getImageLoaded = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', getImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

const imageSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// callack function
export const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(imageSrc, onImageLoaded);
