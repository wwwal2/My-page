
import React, { Component } from 'react';
import { Fetch } from 'react-request';
 
class LocationRequest extends Component {
  render() {
    return (
      <Fetch url="http://api.ipstack.com/114.101.250.125?access_key=a690d859ca69cf463ec76784323e294b">
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
                <div>Post IP: {data.ip}</div>
                <div>Post Country Name: {data.country_name}</div>
              </div>
            );
          }
 
          return null;
        }}
      </Fetch>
    );
  }
}

export default LocationRequest;
