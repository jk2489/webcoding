import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
//import './index.css';

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'))
