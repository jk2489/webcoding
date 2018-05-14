import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ValueInput from './ValueInput';

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
    super(props);
    this.state = {
      inch: 0,
      cm: 0
    }
  }

  inchChanged(e) {
    const inchValue = e.value;
    const cmValue = inchValue * 2.54;
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  cmChanged(e) {
    const cmValue = e.value;
    const inchValue = cmValue * 2.54;
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  render() {
    return (
      <div>
        <ValueInput title='inch' onChange={e => this.inchChanged(e)}
          value={this.state.inch} />
        <ValueInput title='cm' onChange={e => this.cmChanged(e)}
          value={this.state.cm} />
      </div>
    )
  }
}

export default App;
