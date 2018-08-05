import React, { Component } from 'react';
import './inputLine.css';
import NewsRequest from './newsRequest';

class Inputline extends Component {

state = {
  input: "Apple",
}

  handlerEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState({input: e.target.value});
    }
  }
  render() {
    
    return (
      <div>
        
        <div className = "container-fluid">
                <div className="row" >
                    <div className="col-sm-2" >
                    </div>
                    <div className="col-sm-9" >
                      <input type="text" className="inputLine" 
                      placeholder="Input the topic you want to know about"
                      onKeyPress={this.handlerEnter}/>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
        </div>
        <div>
          
          
          <NewsRequest passInput={this.state.input}/>
        </div>
        
      </div>
    );
  }
}

export default Inputline;
