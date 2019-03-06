import React, { Component } from 'react';
import './App.css';
import Main from '../Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Find you favorite series here</h3>  
        </header>
        <Main/> 
      </div>
    );
  }
}

export default App;
