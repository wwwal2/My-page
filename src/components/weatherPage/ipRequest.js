import React, { Component } from 'react';
import { Fetch } from 'react-request';
import WeatherRequest from './weatherRequest';


class IpRequest extends Component {
  
  render() {
   
      return (
        <div>
          <Fetch url="http://ip-api.com/json">
            {({ fetching, failed, data }) => {
              if (fetching) {
                return <div>Loading data...</div>;
              }
    
              if (failed) {
                return <div>The request did not succeed.</div>;
              }
    
              if (data) {
                
                return (
                  <div>
                    <div>Country: {data.country}</div>
                    <div>City: {data.city}</div>
                    <div>Lat: {data.lat}</div>
                    <div>Long: {data.lon} </div>
                    <div><WeatherRequest pass={data}/></div>
                  </div>
                );
              }
              
              return null;
            }}
            
          </Fetch>
          
          
      </div>
    );
  }
}

export default IpRequest;
