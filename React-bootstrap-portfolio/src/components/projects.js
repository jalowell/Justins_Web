import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default class projects extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/project1.png")}
            />
            <Card.Body>
              {/* <Card.Link href="https://siberianbuckwheat.com"> */}
              <Card.Title>Cool guy stuff</Card.Title>
              {/* </Card.Link> */}
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>

              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/project1.png")}
            />
            <Card.Body>
              {/* <Card.Link href="https://unheatedhoney.ca/landing"> */}
              <Card.Title>Even MORE cool guy stuff</Card.Title>
              {/* </Card.Link> */}
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/project1.png")}
            />
            <Card.Body>
              {/* <Card.Link href="https://floating-inlet-71164.herokuapp.com"> */}
              <Card.Title>THE MOST cool guy stuff</Card.Title>
              {/* </Card.Link> */}
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>
              {/* <Card.Link href="https://github.com/DiLiubarets/Doctor-checkup"> */}
              Code
              {/* </Card.Link> */}
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/project1.png")}
            />
            <Card.Body>
              {/* <Card.Link href="https://diliubarets.github.io/LSD-project/"> */}
              <Card.Title>Coolest guy stuff</Card.Title>
              {/* </Card.Link> */}
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>
              {/* <Card.Link href="https://github.com/DiLiubarets/LSD-project"> */}
              Code
              {/* </Card.Link> */}
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck></CardDeck>
      </div>
    );
  }
}
