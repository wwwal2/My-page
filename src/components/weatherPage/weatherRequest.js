import React, { Component } from 'react';
import { Fetch } from 'react-request';


class WeatherRequest extends Component {
  
 
  render() { 
    
    
    return (
      
        <div>
                <Fetch url={`QQQhttp://api.openweathermap.org/data/2.5/weather?lat=${this.props.pass.lat}&lon=${this.props.pass.lon}&appid=bb794341f05d858c4293e3ec60edba9b`}>
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
                      <div>Weather description: {data.weather[0].description}</div>
                      <div>Temperature: {data.main.temp} Kelvin</div>
                      
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

export default WeatherRequest;
