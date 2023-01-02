import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import { Container } from "react-bootstrap";

const Bannar = () => {
  return (
    <div>
      <div className="ser"><h1>Welcome to MedEasy E-Health Care Service</h1></div>
      <div className="banner">
        <Carousel>
          <Carousel.Item interval={1500}>
            <Row>
              <Col className="para">
                <h3>MEDICINE HOME DELIVERY</h3>
                <p>
                Order medicine from our online pharmacy every month and save your money & time.<br></br>Our medicine is authentic and cheaper than the pharmacy in most cases.<br></br> Get up to 10% discount on your medicine order. How to order medicine from MedEasy?<br></br> -Download MedEasy App and upload your prescription -You can also search for<br></br> your desired medicine -Select the medicine you want to buy and click add to cart <br></br>-Add delivery address and proceed to place the order.
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
                <h3>About us</h3>
                <p>
                MedEasy is the no. 1 digital healthcare platform in Bangladesh.<br></br> We provide doctor video consultation and medicine home delivery all over Bangladesh.<br></br> We are also supported by the ICT division of Bangladesh.<br></br> MedEasy app enables you to connect with licensed doctors from 23 specialties and,<br></br> receive consultations through video calling from anywhere.
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
                <h3>VIDEO-CONSULT WITH SPECIALIST DOCTORS</h3>
                <p>
                Now you can consult with renowned specialist doctors via video call<br></br> from anywhere by booking appointments with them. For chronic health conditions<br></br> like Diabetes, Hypertension, Liver Disease you can get consultations from<br></br> specialist doctors as well. For common health conditions like <br></br>flu, fever, headaches, diarrhea, common allergies, skin conditions, etc. <br></br>you can consult with our experienced General Practitioners (MBBS) <br></br>for only 99 taka throughout the day.
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
