import React from 'react';
import InputLine from '../inputLine/inputLine';
import IpRequest from './ipRequest';
import './weatherPage.css';


const Weather = () => {

  
    

      return (
       
        <div>
           <h1 className="weatherTitle">WEATHER APP</h1>
           <p></p>
           <InputLine/>
           <IpRequest/>
        </div>
      );
    }
  
  
  export default Weather;
  