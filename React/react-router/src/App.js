import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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

const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>Select Language</p>
    <ul>
      <li><a href='/ko'>Korean</a></li>
      <li><a href='/en'>English</a></li>
    </ul>
  </div>
)

const HelloKorean = () => (
  <div>
    <h1>안녕하세요!</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

const HelloEnglish = () => (
  <div>
    <h1>Hello!</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

const App = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home} />
      <Route path='/ko' component={HelloKorean} />
      <Route path='/en' component={HelloEnglish} />
    </div>
  </Router>
)

export default App;