import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }

    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };

  updateState(e) {
    this.setState({data:e.target.value});
  }

  clearInput() {
    this.setState({data:''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input value={this.state.data} onChange={this.updateState} ref="myInput"></input>
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default App;
