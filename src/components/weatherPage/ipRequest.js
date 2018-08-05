import React, { Component } from 'react';
import { Fetch } from 'react-request';
import WeatherRequest from './weatherRequest';
import ImageWeather from '../image/image_weather';
import OnReject from './onReject';


class IpRequest extends Component {
  
  render() {
    
      return (
        <div>
          <Fetch url="QQQhttp://ip-api.com/json">
            {({ fetching, failed, data }) => {
              if (fetching) {
                return <div>Loading data...</div>;
              }
    
              if (failed) {
                return <div> <OnReject/> </div>;
              }
    
              if (data) {
                
                return (
                  <div>
                    <h5>Collecting information ...</h5>
                    
                    <div></div>
                    
                    
                    <div className = "container-fluid">

                        <div className="row" >
                            <div className="col-sm-3" ></div>
                            <div className="col-sm-5" >
                              <p>Country: {data.country}<br/>City: {data.city}<br/>Lat: {data.lat}<br/>Long: {data.lon}<br/></p> 
                              
                              <p><WeatherRequest pass={data}/></p>
                            </div>
                            <div className="col-sm-2" id="imageWeather"><ImageWeather/></div>
                            <div className="col-sm-2"></div>
                        </div>
        
                    </div>
                    

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
