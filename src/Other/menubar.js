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
        <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Events/Talks</div>

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

       </div>
        //</nav>

    );
  }
}

export default MenuBar;