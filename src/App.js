import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Clock" />
        <Clock />
      </div>
    );
  }
}
