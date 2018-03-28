import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          "id":"11111",
          "title":"Blue",
          "color":"#0070ff",
          "rating":3,
          "timestamp":"Mar 27"
        }
      ],
      sort:"SORTED_BY_DATE"
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {

  }
  rateColor(id, rating) {

  }
  removeColor(id) {

  }

  render() {
    const {addColor, rateColor, removeColor} = this
    const {color} = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
                   onRate={rateColor}
                   onRemove={removeColor} />
      </div>
    )
  }
}

export default App;
