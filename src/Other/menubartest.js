import React from 'react';
import './test.css';
import MenuBar from './menubar';
import {Nav, NavDropdown, MenuItem} from 'react-bootstrap';

class MenuBarTest extends React.Component {
constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render() {
    return (
       <Nav>
        <NavDropdown
          onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }
          noCaret
          id="language-switcher-container"
        >
          <MenuItem>Only one Item</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }
}

export default MenuBarTest;