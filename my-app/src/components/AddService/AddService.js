import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const AddService = () => {
  return (
    <div className="AddService">
      <div className="addser"><h1>Add New Service</h1></div>
      <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="name" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="price" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Service Description</Form.Label>
          <Form.Control type="descrip" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Service Image/Thumbnail</Form.Label>
          <Form.Control type="img" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      </Container>
    </div>
  )
}

export default AddService;
