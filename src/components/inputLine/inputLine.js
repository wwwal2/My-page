import React, { Component } from 'react';
import './inputLine.css';

class Inputline extends Component {
  render() {
    return (
      <div>
        
        <div className = "container-fluid">
                <div className="row" >
                    <div className="col-sm-2" >
                    </div>
                    <div className="col-sm-9" >
                      <input type="text" className="inputLine"/>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        
      </div>
    );
  }
}

export default Inputline;