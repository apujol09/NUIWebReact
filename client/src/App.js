import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import MenuBar from './Other/menubar';
import Contact from './Contact/contact';
import Footbar from './Other/footbar';
import NotFound from './NotFound/NotFound';
import About from './About/about';
import Projects from './Projects/projects';
import Publications from './Publications/publications';
import Events from './Events/events';
import Resources from './Resources/resources';
import Teaching from './Teaching/teaching';
import FranciscoInfo from './More Info/francisco';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/publications" component={Publications} />
              <Route path="/events" component={Events} />
              <Route path="/resources" component={Resources} />
              <Route path="/teaching" component={Teaching} />
              <Route path="/francisco-ortega" component={FranciscoInfo} />
              <Route component={NotFound} />
            </Switch>
          <Footbar />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
