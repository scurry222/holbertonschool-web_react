import React from 'react';
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="App-header">
          <img src={logo}></img>
          <h1>School Dashboard</h1>
        </div>
        <hr />
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <hr />
        <div className="App-footer">
          {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}
        </div>
      </>
    )
  }
}