import React, { Component } from 'react';
import InputLine from '../inputLine/inputLine';
import LocationRequest from './weatherRequest';


class Weather extends React.Component {

  
    render() {
      

      return (
       
        <div>
           WEATHER PAGE
           <InputLine/>
           <LocationRequest/>
        </div>
      );
    }
  }
  
  export default Weather;
  