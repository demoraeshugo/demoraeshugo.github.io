//React
import React, { Component } from "react";

//Styles
import "bootstrap/dist/css/bootstrap.css";

//Components
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" className="border-bottom">
          <Navbar.Brand href="#home">
            <img
              src="/images/assets_logo-sf-small.png"
              className="d-inline-block align-top"
              alt="logo-sf-small"
            />
          </Navbar.Brand>
          <span className="text-muted ml-auto">MESSAGE VIEWER</span>
        </Navbar>
      </>
    );
  }
}

export default Header;
