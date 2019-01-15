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
        
        <div>
          <div><h3><a className="lab-title" href="#">NUI Lab</a></h3></div>
          <div className="navbar">
          <div className="dropdown">
            {/*<img className="menulogo"/> (THIS SHOULD NOT BE HERE!!!!)*/}
            <div className="defaultbutton">NUI LAB</div>
          </div>

           {/*Home Menu Button*/}
          <div className="dropdown" >
            <NavLink className="button" to="/">
              Home
            </NavLink>
          </div>

           {/*About Us Menu Button*/}
          <div className="dropdown" >
            <NavLink className="button" to="/about">
              About Us
            </NavLink>
          </div>

         {/*Projects Menu Button*/}
        <div className="dropdown" >
            <NavLink className="button" to="/projects">
              Projects
            </NavLink>
       </div>

        {/*Publications Menu Button*/}
       <div className="dropdown" >
            <NavLink className="button" to="/publications">
              Publications
            </NavLink>
       </div>

        {/*Events/Talks Menu Button*/}
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Events/Talks</div>
       {/*
          { this.state.displayMenu ? (
          <ul onMouseLeave={this.hideDropdownMenu}>
         <li><a className="active" href="#Create Page">Test 1</a></li>
         <li><a href="#Manage Pages">Test 2</a></li>
         <li><a href="#Create Ads">Test 3</a></li>
         <li><a href="#Manage Ads">Test 4</a></li>
         <li><a href="#Activity Logs">Test 5</a></li>
         <li><a href="#Setting">Test 6</a></li>
         <li><a href="#Log Out">Test 7</a></li>
          </ul>
        ):
        (
          null
        )
        }
      */}
       </div>

        {/*Contact Menu Button*/}
       <div className="dropdown" >
        <NavLink className="button" to="/contact">
         Contact
        </NavLink>
       </div>

        {/*Resources Menu Button*/}
       <div className="dropdown" >
        <NavLink className="button" to="/resources">
         Resources
        </NavLink>
       </div>

      {/*Teaching Menu Button*/}
       <div className="dropdown" >
        <NavLink className="button" to="/teaching">
          Teaching
        </NavLink>
       </div>

         {/*Books Menu Button*/}
       <div className="dropdown" >
       <div className="button"><a className="book" href="http://3dinputbook.com">Books</a></div>
       </div>

      </div>
     </div>
        

    );
  }
}

export default MenuBar;