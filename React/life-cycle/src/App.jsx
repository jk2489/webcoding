import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  };

  setNewNumber() {
    this.setState({data: this.state.data + 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends Component {
  componentWillMount() {
    console.log('Will mount');
  }
  componentDidMount() {
    console.log('Did mount');
  }
  componentWillUnmount() {
    console.log('Will unmount');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
