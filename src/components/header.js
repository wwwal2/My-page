import React, { Component } from 'react';
import './header.css';
import logo from './logo.jpeg'



class Header extends React.Component {
    
    state = {
        loadLogo: logo,
    }
    
    render() {
      return (
       
        <div className="header" style={{backgroundColor: 'white'}}>
            
            <div className = "container-fluid">
                <div className="row" >
                    <div className="col-sm-2" id="image">
                        image
                     </div>
                    <div className="col-sm-8" id="title">BLOG</div>
                    <div className="col-sm-2" id="post">my starting project</div>
                    
                </div>
            </div>
            
            <div>  </div>
            <image src={this.loadLogo} />
            
        </div>
      );
    }
  }
  
  export default Header;
  