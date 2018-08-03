import React from 'react';
import IpRequest from './ipRequest';
import './weatherPage.css';


const Weather = () => {

  
    

      return (
       
        <div>
           <h1 className="weatherTitle">WEATHER APP</h1>
           <div id="weatherPageText">
           <IpRequest/>
           </div>
          
              
          
           
           
        </div>
      );
    }
  
  
  export default Weather;
  