import React from 'react';
import logo from './logo.jpg';
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
        </body>
        <hr />
        <footer>Copyright 2020 - holberton School</footer>
      </>
    )
  }
}