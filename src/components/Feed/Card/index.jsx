//React
import React, { Component } from "react";

//Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

//Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarButton from "./StarButton/index";
import TrashButton from "./TrashButton/index";
import Image from "./Image/index";
import Handle from "./Handle/index";
import Timestamp from "./Timestamp/index";
import Source from "./MessageSource/index";
import Content from "./Content/index";

class Card extends Component {
  render() {
    return (
      <>
          <span key={"span" + this.props.id}>
            <Container className="card shadow-sm">
              <Row>
                <Col sm="auto">
                  <div className="text-center">
                    {
                      <Image
                        source={this.props.index["avatar"]}
                        key={"avatar" + this.props.id}
                      />
                    }
                    {
                      <Handle
                        source={this.props.index["handle"]}
                        key={"handle" + this.props.id}
                      />
                    }
                  </div>
                </Col>
                <Col lg>
                  <div className="text-muted source">
                    {
                      <Source
                        source={this.props.index["source"]}
                        key={"source" + this.props.id}
                      />
                    }
                    <span> | </span>
                    {
                      <Timestamp
                        source={this.props.index["timestamp"]}
                        key={"timestamp" + this.props.id}
                      />
                    }
                  </div>
                  {
                    <Content
                      source={this.props.index["content"]}
                      key={"content" + this.props.id}
                    />
                  }
                </Col>
                <Col sm="auto">
                  {
                    <StarButton
                      key={"button" + this.props.id}
                      {...this.props}
                    />
                  }
                  {
                    <TrashButton
                      key={"trash" + this.props.id}
                      {...this.props}
                    />
                  }
                </Col>
              </Row>
            </Container>
          </span>
      </>
    );
  }
}
export default Card;
