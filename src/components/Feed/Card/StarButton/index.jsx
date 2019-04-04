//React
import React, { Component } from 'react';

//Styles
import 'bootstrap/dist/css/bootstrap.css';

//Components
import Button from 'react-bootstrap/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fortawesome/free-regular-svg-icons'

class StarButton extends Component {
  render() {
    return <>
      <Button 
            onClick={this.props.handleStarClick}
            variant={this.props.variant}
            size="sm">
            {this.props.starText}
      </Button>
    </>;
  }
}
export default StarButton;