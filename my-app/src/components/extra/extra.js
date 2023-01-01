import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './extra.css'

const extra = (props) => {
  const {name, img, rev} = props.realService
  return (
    <div className='review'>
      <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title><h1>{name}</h1></Card.Title>
                <Card.Text>
                <h3>{rev}</h3>
                </Card.Text>
              </Card.Body>
        </Card>
    </div>
  );
};

export default extra
