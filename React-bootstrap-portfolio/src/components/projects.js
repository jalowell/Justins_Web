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
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Card.Title>Cool guy stuff</Card.Title>
              </Card.Link>
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
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Card.Title>Even MORE cool guy stuff</Card.Title>
              </Card.Link>
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
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Card.Title>THE MOST cool guy stuff</Card.Title>
              </Card.Link>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Code
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/project1.png")}
            />
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Card.Title>Coolest guy stuff</Card.Title>
              </Card.Link>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Code
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck></CardDeck>
      </div>
    );
  }
}
