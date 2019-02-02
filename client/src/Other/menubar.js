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
                            <NavLink className="nui-big" to="/">NUI LAB</NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <a className="menu-link" href="http://3dinputbook.com">Books</a>
                            <NavLink className="menu-link" to="/teaching">Teaching</NavLink>
                            <NavLink className="menu-link" to="/resources">Resources</NavLink>
                            <NavLink className="menu-link" to="/contact">Contact</NavLink>
                            <NavLink className="menu-link" to="/events">Events/Talks</NavLink>
                        </div>

                        <div className="bottom">
                            <NavLink className="menu-link" to="/login">Log in</NavLink>
                            <NavLink className="menu-link" to="/publications">Publications</NavLink>
                            <NavLink className="menu-link" to="/projects">Projects</NavLink>
                            <NavLink className="menu-link" to="/about">About Us</NavLink>
                            <NavLink className="menu-link" to="/">Home</NavLink>
                        </div>
                    </div>
                </div>
            </header>
            
        

    );
  }
}

export default MenuBar;