import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import request from 'superagent';

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
      items: null
    }
  }

  componentWillMount() {
    request.get('./fruits.json')
    .accept('application/json')
    .end((err, res) => {
      this.loadedJSON(err, res)
    })
  }

  loadedJSON(err, res) {
    if(err) {
      console.log('Error while reading JSON');
      return;
    }
    this.setState({
      items: res.body
    })
  }

  render() {
    if(!this.state.items) {
      return <div className='App'>
        Reading...
      </div>
    }

    const options = this.state.items.map(e => {
      return <option value={ e.price } key={ e.name }>
        { e.name }
      </option>
    })

    return (
      <div className='App'>
        Fruit: <select>{options}</select>
      </div>
    )
  }
}

export default App;
