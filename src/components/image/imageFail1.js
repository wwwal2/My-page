
import React from 'react';
import Image from './Selection_001.png'; // Tell Webpack this JS file uses this image


function ImageFail1() {
  return <img src={Image} alt="Logo" style={{width: '450px', height: '70px'}} />;
}

export default ImageFail1;
