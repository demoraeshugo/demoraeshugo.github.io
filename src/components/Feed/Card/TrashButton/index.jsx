//React
import React, { Component } from 'react';

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//Components
import Button from 'react-bootstrap/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fortawesome/free-regular-svg-icons'

class TrashButton extends Component {
  render() {
    return <>
      <Button 
        variant="light"
        size="sm"
        className="trashButton"
        onClick={this.props.handleTrashClick}>
        {this.props.trashText}
      </Button>
    </>;
  }
}
export default TrashButton;