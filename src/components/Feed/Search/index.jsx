//React
import React, { Component } from 'react';

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


//Notes: In order to update "Counter" on button click, "Feed" must hold all the required data and pass down to each relevant component
class Search extends Component {

    render () {
        return <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control block size="sm" placeholder="Search" id="inputText" disabled/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button size="sm" variant="outline-warning" type="submit" className="moveUp" disabled >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    }

}
export default Search;