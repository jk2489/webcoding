import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;