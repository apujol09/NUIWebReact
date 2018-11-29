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
          <div className="dropdown" >
            <img className="menulogo"/>
          </div>


          <div className="dropdown" >
            <div className="button">Home</div>
          </div>

          <div className="dropdown" >
            <div className="button">About Us</div>
          </div>

        <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Projects</div>

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
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Publications</div>

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
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Contact</div>

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
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Resources</div>

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
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Teaching</div>

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
       <div className="dropdown" >
         <div className="button" onMouseEnter={this.showDropdownMenu} onClick={this.showDropdownMenu}>Books</div>

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
     </div>
        //</nav>

    );
  }
}

export default MenuBar;