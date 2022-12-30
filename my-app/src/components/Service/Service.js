import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Service = (props) => {
  const {_id, name, price, des, img} = props.realService
  const {handleDeleteService} = props
  return (
    <div>
        <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h5>Cost: {price}</h5>
                <Card.Text>
                {des}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button
                onClick={() => handleDeleteService(_id)}
                 variant="primary" className='ms-4'>Delete</Button>
              </Card.Body>
        </Card>
    </div>
  );
};

export default Service
