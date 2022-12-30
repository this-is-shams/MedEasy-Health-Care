import React from "react";
import { Container } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap'
import {useRef} from 'react';

const AddService = () => {
  const nameRef=useRef()
  const costRef=useRef()
  const desRef=useRef()
  const imgRef=useRef()

  const handleAddService=(e)=>{
    const name=nameRef.current.value
    const price=costRef.current.value
    const des=desRef.current.value
    const img=imgRef.current.value

    const newService={name,price,des,img}

    fetch("http://localhost:5000/services",{method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(newService),})
    .then(res=>res.json())
    .then((data) => {
      if(data.insertedId) {
        alert('Succesfully Added!')
      }
    })
    e.preventDefault()
  }


  return (
    <div className="AddService">
      <div className="addser"><h1>Add New Service</h1></div>
      <Container>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cost</Form.Label>
          <Form.Control ref={costRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Description</Form.Label>
          <Form.Control ref={desRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Image/Thumbnail</Form.Label>
          <Form.Control ref={imgRef} type="text" placeholder="" />
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
