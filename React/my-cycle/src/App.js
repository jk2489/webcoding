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
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.lg('compoenentWillUnmount');
  }

  render() {
    console.log('render');
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>
        setState</button>
      </div>
    )
  }
}

export default App;
