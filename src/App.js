import React, { Component } from 'react';
import './App.css';
import Store from './Containers/Store/Store';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Store/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
