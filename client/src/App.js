import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar'
import DataTable from './components/DataTable/DataTable'

class App extends Component {

  render() {
    return (
      <div>
        <AppBar />
        <DataTable />
      </div>
    );
  }
}

export default App;
