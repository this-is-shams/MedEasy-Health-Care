import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import pediatrics from "./pediatrics.png";
import neurosergery from "./neurosergery.png";
import cancer from "./cancer.png";
import cardio from "./cardio.png";
import dental from "./dental.png";
import women from "./women.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Services from '../Services/Services'
import Bannar from '../Bannar/Bannar'
import './Home.css'


function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <div className="ser"><h1>OUR SERVICES</h1></div>

      <Services></Services>

    </div>
  );
}

export default Home;
