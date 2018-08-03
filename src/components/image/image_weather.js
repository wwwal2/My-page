
import React from 'react';
import imageWeather from './image_weather.jpg'; // Tell Webpack this JS file uses this image


function ImageWeather() {
  return <img src={imageWeather} alt="Logo" style={{width: '100%', height: '170px'}} />;
}

export default ImageWeather;
