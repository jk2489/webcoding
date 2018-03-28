import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';
import storeFactory from  './store'

const store = storeFactory()
const render = () =>
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )

store.subscribe(render)
render()
