import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

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
    this.state = {value: ''}
  }

  doChange(e) {
    const newValue = e.target.value;
    this.setState({value:newValue})
  }

  doSubmit(e) {
    window.alert('Sending: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);

    return (
      <form onSubmit={doSubmit}>
        <input type='text' value={this.state.value}
        onChange={doChange} />
        <input type='submit' value='Send' />
      </form>
    )
  }
}

export default App;
