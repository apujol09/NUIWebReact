import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import LoginForm from './Forms/login';
import MemberForm from './Forms/member';
import Logout from './Logout/logout';
import RegisterAdmin from './Forms/register';
import axios from 'axios';

class App extends Component {

  state={
    isLoggedIn: false,
  }

  componentDidMount(){
    axios.get(`/api/auth`)
    .then(res => {
      if(res.data.isAuth === true){
        this.setState({ isLoggedIn: true });
      }
      else{
        this.setState({ isloggedIn: false });
      }
    })
  }

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
              {this.state.isLoggedIn ? <Route path="/logout" component={Logout} /> : <Route path="/login" component={LoginForm} />}
              {this.state.isLoggedIn ? <Route path="/add-member" component={MemberForm} /> : null}
              {this.state.isLoggedIn ? <Route path="/register-admin" component={RegisterAdmin} /> : null}
              <Route component={NotFound} />
            </Switch>
          <Footbar />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
