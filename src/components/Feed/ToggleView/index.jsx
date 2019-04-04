//React
import React, { Component } from 'react';

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//Components
import Button from 'react-bootstrap/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fortawesome/free-regular-svg-icons'

class ToggleView extends Component {
  render() {
    return <>
      <Button 
        className="toggleView"
        variant="light"
        size="sm"
        block
        //className="toggleView"
        onClick={this.props.handleToggleClick}>
        {this.props.toggleViewText}
      </Button>
    </>;
  }
}
export default ToggleView;