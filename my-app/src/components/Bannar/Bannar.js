import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";

const Bannar = () => {
  return (
    <div>
      <div className="ser"><h1>Welcome to MedEasy E-Health Care Service</h1></div>
      <div className="banner">
        <Carousel>
          <Carousel.Item interval={1500}>
            <Row>
              <Col className="para">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                </p>
              </Col>
              <Col>
                <img className="d-block w-100" src={b1} alt="First slide" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Row>
              <Col className="para">
                <h3>Second slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                </p>
              </Col>
              <Col>
                <img className="d-block w-100" src={b2} alt="Second slide" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Row>
              <Col className="para">
                <h3>Three slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <br></br>A quick brown fox jumps over the lazy dog, lroem
                  ipsum 10 <br></br>
                </p>
              </Col>
              <Col>
                <img className="d-block w-100" src={b3} alt="Third slide" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Bannar
