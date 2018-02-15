import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jiyoung',
  lastName: 'Kim'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
  //<App />,
  element,
  document.getElementById('root')
);
