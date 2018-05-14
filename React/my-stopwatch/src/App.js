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

export default App;
*/

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLive: false,
      curTime: 0,
      startTime: 0
    }
    
    this.timerId = 0;
  }

  componentWillMount() {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    if(this.state.isLive) {
      const v = new Date().getTime();
      this.setState({curTime: v});
    }
  }

  clickHanlder(e) {
    if(this.state.isLive) {
      this.setState({isLive: false});
      return;
    }
    const v = new Date().getTime();
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true
    });
  };

  getDisp() {
    const s = this.state;
    const delta = s.curTime - s.startTime;
    const t = Math.floor(delta / 1000);
    const ss = t % 60;
    const m = Math.floor(t / 60);
    const mm = m % 60;
    const hh = Math.floor(mm / 60);
    const z = (num) => {
      const s = '00' + String(num);
      return s.substr(s.length - 2, 2);
    }
    return <span className='disp'>
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>
  }

  render() {
    let label = 'START';

    if(this.state.isLive) {
      label = 'STOP';
    }

    const disp = this.getDisp();
    const fclick = (e) => this.clickHanlder(e);
    
    return (
      <div className='App'>
        <div>{disp}</div>
        <button onClick={fclick}>{label}</button>
      </div>
    );
  }
}

export default App;