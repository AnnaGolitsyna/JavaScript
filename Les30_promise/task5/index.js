// algo
// export addImageV2 =>
// input - url, output - promis
// addImageV2 => promise addImage
// add img(url) in el with class .page
// resolve - width, height
// reject - error

import { addImage } from './addImage.js';

export const addImageV2 = url =>
  new Promise((resolve, reject) => {
    addImage(url, (error, { width, height }) => {

      if (error) reject(error);
      else resolve({ width, height });
    });
  });

// const imgPromise = addImageV2(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
// );

// imgPromise.catch(error => console.log(error));

// imgPromise.then(({ width, height }) => {
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.append(`${width} x ${height}`);
// });

// examples

// addImageV2('https://server.com/image.png')
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
