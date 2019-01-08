import React from 'react';
import './menubar.css';


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
            <div className="button">Home</div>
          </div>

           {/*About Us Menu Button*/}
          <div className="dropdown" >
            <div className="button">About Us</div>
          </div>

         {/*Projects Menu Button*/}
        <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Projects</div>
       </div>

        {/*Publications Menu Button*/}
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Publications</div>
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
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Contact</div>
       </div>

        {/*Resources Menu Button*/}
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Resources</div>
       </div>

      {/*Teaching Menu Button*/}
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Teaching</div>
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