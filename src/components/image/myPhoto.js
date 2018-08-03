
import React from 'react';
import myPhoto from './myPhoto.jpg'; // Tell Webpack this JS file uses this image


function MyPhoto() {
  return <img src={myPhoto} alt="Logo" style={{width: '200px', height: '170px'}} />;
}

export default MyPhoto;
