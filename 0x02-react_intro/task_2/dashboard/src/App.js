import React from 'react';
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <header className="App-header">
          <img src={logo}></img>
          <h1>School Dashboard</h1>
        </header>
        <hr />
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' />

          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' />

          <button>OK</button>

        </body>
        <hr />
        <footer>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</footer>
      </>
    )
  }
}