import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './Home/home';
import Home from './Home/home';
import MenuBar from './Other/menubar';
import Contact from './Contact/contact';
import Footbar from './Other/footbar';

class App extends Component {

  render() {
    return (
      <div>
      <MenuBar />
      <Home className = "Home" /> 
      <Footbar />
     </div>
    );
  }
}

export default App;
