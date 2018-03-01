import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

/*
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from props...",
      content: "Content from props..."
    }
  }

  render() {
    return (
      <div>
        <Header headerProp={ this.state.header } />
        <Content contentProp={ this.state.content } />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.contentProp}</h1>
      </div>
    );
  }
}
*/

class App extends Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdateHandler.bind(this);
  };
  
  forceUpdateHandler() {
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <button onClick={this.forceUpdateHandler}>Force update</button>
        <h4>Random number: {Math.random()}</h4>
      </div>
    );
  }
}

export default App;
