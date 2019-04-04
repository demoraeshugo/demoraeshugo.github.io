//React
import React, { Component } from 'react';

//Styles
import 'bootstrap/dist/css/bootstrap.css';

//Components
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class Counter extends Component {
  componentDidMount() {
      this.props.setCounter();
    }

  render () {
    return <>
    <Button 
      variant="warning" 
      size="sm" 
      block
      className="text-white">Starred: <Badge variant="light">{this.props.count}</Badge>
    </Button>
  </>;
  }
}
export default Counter;

