import React from 'react';
import Image2 from './Selection_002.png'; // Tell Webpack this JS file uses this image


function ImageFail2() {
  return <img src={Image2} alt="Logo" style={{width: '550px', height: '70px'}} />;
}

export default ImageFail2;
