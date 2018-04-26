import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductionsContainer from './components/ProductionsContainer';
import InstrumentsContainer from './components/InstrumentsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rooster</h1>
        </header>
        <p className="App-intro">
          To get started...
        </p>
        <ProductionsContainer />
        <InstrumentsContainer />
      </div>
    );
  }
}

export default App;
