import React from 'react';
import './menubar.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


class MenuBar extends React.Component {
    constructor(){
    super();

    this.state = {
        displayMenu: false,
        isLoggedIn: false
        };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

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
        <header className="menu-header">
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
                            {this.state.isLoggedIn ? <NavLink className="menu-link" to="/register-admin">Register Admin</NavLink> : null}
                            {this.state.isLoggedIn ? <NavLink className="menu-link" to="/logout">Log Out</NavLink> : <NavLink className="menu-link" to="/login">Log in</NavLink>}
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