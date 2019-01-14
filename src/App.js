import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './Home/home';
import Home from './Home/home';
import MenuBar from './Other/menubar';
import Contact from './Contact/contact';
import Footbar from './Other/footbar';
import NotFound from './NotFound/NotFound';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuBar />
            <Switch>
              <Route exact path="/" Component={Home} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          <Footbar />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
