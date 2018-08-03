import React from 'react';
import './header.css';
import Img from '../image/image';


const Header = () => {
    
    
    

      return (
       
        <div className="header" style={{backgroundColor: 'white'}}>
            
            <div className = "container-fluid">
                <div className="row" >
                    <div className="col-sm-3" id="image"><Img/></div>
                    <div className="col-sm-7" id="title">Alex's Smirnov App</div>
                    <div className="col-sm-2" id="post">my start project</div>
                </div>
                <div className="titlePageText">
                    <div><footer className="footer"> <p>Junior Fullstack Developer</p> </footer></div>
                    
                    
                </div>
            </div>

                                    
            
        </div>
      );
    }
  
  
  export default Header;
  