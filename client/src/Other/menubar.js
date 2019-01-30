import React from 'react';
import './menubar.css';
import { NavLink } from 'react-router-dom';


class MenuBar extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }


  render() {
    return (
        //<nav>
        <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            <NavLink to="/">NUI LAB</NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <a href="http://3dinputbook.com">Books</a>
                            <NavLink to="/teaching">Teaching</NavLink>
                            <NavLink to="/resources">Resources</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/events">Events/Talks</NavLink>
                        </div>

                        <div className="bottom">
                            <NavLink to="/login">Log in</NavLink>
                            <NavLink to="/publications">Publications</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/">Home</NavLink>
                        </div>
                    </div>
                </div>
            </header>
            
        

    );
  }
}

export default MenuBar;