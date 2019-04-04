//React
import React, { Component } from "react";

//JSON
import { messages } from "./messages.json";

//Styles
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

//Components
import Container from "react-bootstrap/Container";
import Card from "./Card/index";
import Counter from "./Counter/index";
import ToggleView from "./ToggleView/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./Search/index";

//Notes: In order to update "Counter" on button click, "Feed" must hold all the required data
//and pass down to each relevant component
class Feed extends Component {
  constructor() {
    super();
    this.state = {
      buttonState: [],
      cardState: [],
      //Define count (value is arbritray as "Component did mount" will check "buttonState" in case any value is set to true by default)
      count: 0,
      toggleTrashedView: false
    };
  }

  //Calls functions to initialize arrays and set state prior to rendering to DOM
  componentWillMount = () => {
    this.initializeButtonState();
    this.initializeCardState();
  };

  //Initialize an array of object containing state's pulled from JSON "isStarred", NOTE: set to "false" by default
  initializeButtonState = () => {
    var buttonState = [];
    for (var i = 0; i < messages.length; i++) {
      var obj = { id: i, isStarred: false };
      buttonState.push(obj);
    }
    this.setState({
      buttonState: buttonState
    });
  };

  //Initialize an array of object containing state's pulled from JSON "isTrashed", NOTE: set to "false" by default
  initializeCardState = () => {
    var cardState = [];
    for (var i = 0; i < messages.length; i++) {
      var obj = { id: i, isTrashed: false };
      cardState.push(obj);
    }
    this.setState({
      cardState: cardState
    });
  };

  //What to do once a button is toggled.  Receives index from child, maps "buttonState" and compares "id" with "index",
  //once found, changes value at matching location and sets state to that new array
  //IMORTANT!!! : "setCounter()" is callback to ensure counter is updated immediently => "SetState is async"
  handleStarClick = index => {
    this.setState(
      state => {
        const buttonState = state.buttonState.map(current => {
          if (current.id === index) {
            return { ...current, isStarred: !current.isStarred };
          } else {
            return { ...current, isStarred: current.isStarred };
          }
        });
        return {
          buttonState
        };
      },
      () => this.setCounter()
    );
  };

  //Updates Counter.  Steps through "buttonState" and increments "count" value by 1 for each button who's "isStarred"
  // state is true
  setCounter = () => {
    var count = 0;
    this.state.buttonState.forEach(function(element) {
      if (element.isStarred === true) {
        count++;
      } else {
        return;
      }
    }, this);
    this.setState({
      count: count
    });
  };

  //Receives index from child element, finds matching index in "cardState" array,
  //updates bolean value and sets state equal to new array
  handleTrashClick = index => {
    this.setState(state => {
      const cardState = state.cardState.map(current => {
        if (current.id === index) {
          return { ...current, isTrashed: !current.isTrashed };
        } else {
          return current;
        }
      });
      return {
        cardState
      };
    });

    //Assuming that a "trashed" card can't also be "starred," checks if trashed card is also starred
    //and sets value to false, if this not the case then simply removing this block will make is so
    //"trashing" a card has no affect on it's "isStarred" property
    this.setState(
      state => {
        const buttonState = state.buttonState.map(current => {
          if (current.id === index) {
            return { ...current, isStarred: false };
          } else {
            return current;
          }
        });
        return {
          buttonState
        };
      },
      () => this.setCounter()
    );
  };

  //Changes state, caused render of only trashed cards
  handleToggleClick = () => {
    this.setState({
      toggleTrashedView: !this.state.toggleTrashedView
    });
  };

  //Builds only cards who's "isTrashed" value = "false"
  buildVisibleCards() {
    var visibleCards = messages.map((current, index) => (
      <>
        {!this.state.cardState[index].isTrashed && (
          <Card
            //To be passed to "Card" child
            key={current.id}
            id={current.id}
            index={current}
            //To be passed to "StarButton" grandchild
            handleStarClick={() => this.handleStarClick(index)}
            variant={
              this.state.buttonState[index].isStarred
                ? "warning"
                : "outline-warning"
            }
            starText={
              this.state.buttonState[index].isStarred
                ? "Starred!"
                : "Star Message!"
            }
            //To be passed to "TrashButton" grandchild
            handleTrashClick={() => this.handleTrashClick(index)}
            trashText={"Trash Message!"}
          />
        )}
      </>
    ));
    return visibleCards;
  }

  //Builds only cards who's "isTrashed" value = "true"
  buildTrashedCards() {
    var trashedCards = messages.map((current, index) => (
      <>
        {this.state.cardState[index].isTrashed && (
          <Card
            //To be passed to "Card" child
            key={current.id}
            id={current.id}
            index={current}
            //To be passed to "StarButton" grandchild
            handleStarClick={() => this.handleStarClick(index)}
            variant={
              this.state.buttonState[index].isStarred
                ? "warning"
                : "outline-warning"
            }
            starText={
              this.state.buttonState[index].isStarred
                ? "Starred!"
                : "Star Message!"
            }
            //To be passed to "TrashButton" grandchild
            handleTrashClick={() => this.handleTrashClick(index)}
            trashText={"Remove from trash"}
          />
        )}
      </>
    ));
    return trashedCards;
  }

  render() {
    //this.initializeButtonState();
    return (
      <>
        <div>
          <Container className="whiteBackground padding">
            <Container className="counter">
              <Row>
                <Col sm="2.5">
                  <Counter
                    count={this.state.count}
                    setCounter={() => this.setCounter()}
                  />
                  <ToggleView
                    handleToggleClick={() => this.handleToggleClick()}
                    toggleViewText={
                      this.state.toggleTrashedView
                        ? "Show Untrashed Messages"
                        : "Show Trashed Messages"
                    }
                  />
                </Col>
                <Col sm="6" className="dropDown">
                  <Search />
                </Col>
              </Row>
            </Container>
            <Container>
              <>
                {this.state.toggleTrashedView //toggleTrashedView acts as a bolean switch deciding which cards to render
                  ? this.buildTrashedCards()
                  : this.buildVisibleCards()}
              </>
            </Container>
          </Container>
        </div>
      </>
    );
  }
}
export default Feed;
