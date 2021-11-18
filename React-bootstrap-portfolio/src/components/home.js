import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import SocialFollow from "./SocialFollow";
import profile from './assets/about.jpeg'
import '../Styling.css/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1 style={{ color: 'gray' }} > Hello, my name is </h1>
          <h1 class="display-4"> Justin Lowell</h1>
          <br />
          <div className="centerPhoto">
            <Image src={profile} roundedCircle width="300" height="300" className="ProfilePic" />
          </div>
          <h3 style={{ marginTop: '0%' }}>I'm a Software Engineer </h3>
          <h4 style={{ float: 'right' }}> </h4>

          <SocialFollow />

        </Jumbotron>
        <br />

        <Container>
          <hr />
          <h4 id="center">Some of my latest projects</h4><br />
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={require("../components/assets/project1.png")} />
                <Card.Body>
                  <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <Card.Title>"Cool guy stuff</Card.Title>
                  </Card.Link>
                  <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Code</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../components/assets/project1.png")}
                />
                <Card.Body>
                  <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <Card.Title>More cool guy stuff</Card.Title>
                  </Card.Link>
                  <Card.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Code</Card.Link>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Button href="./projects" size="md">
              Click to see my projects
            </Button>
          </Row >
          <br />
        </Container>
        <br />
        <hr />
        <br />
        <h4 id="center"> My Skills</h4><br />
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Datebase Management</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Git and more</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}
export default Home;
