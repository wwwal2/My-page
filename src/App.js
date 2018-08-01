import React, { Component } from 'react';



import './App.css';

import Navigation from './components/navigation/navigation';

class App extends Component {
  state = {
    
  }
  
  render() {
       

    return (
          <div>
           
            <Navigation/>
            
            <footer className="footer"> <p>Junior Fullstack Developer</p> </footer>
          </div>          



    );
  }
}

export default App;
