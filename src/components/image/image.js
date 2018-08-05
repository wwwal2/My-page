
import React from 'react';
import logo from './logo.jpeg'; // Tell Webpack this JS file uses this image


function Img() {
  return <img src={logo} alt="Logo" style={{width: '300px', height: '170px'}} />;
}

export default Img;
