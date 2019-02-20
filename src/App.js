import React, { Component } from 'react';
import './App.css';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Thomas Mead Sudoku App</h2>
        <Layout />
      </div>
    );
  }
}

export default App;
