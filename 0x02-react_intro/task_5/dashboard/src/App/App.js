import React from 'react';
import logo from '../assets/logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';

export default App = () => {
  return (
    <>
      <div className="App-header">
        <img src={logo}></img>
        <h1>School Dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' />

        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' id='password' />

        <button>OK</button>

      </div>
      <hr />
      <div className="App-footer">
        {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}
      </div>
    </>
  )
}