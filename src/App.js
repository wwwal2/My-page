import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Inputline from './components/inputLine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Inputline/>
      </div>
    );
  }
}

export default App;
