//React
import React, { Component } from "react";

//Styles
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              Created by Hugo De Moraes for Signafire Technologies 2019
            </span>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
