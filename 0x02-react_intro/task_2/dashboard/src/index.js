import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Notifications from './Notifications'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
