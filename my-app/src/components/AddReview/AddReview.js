import React from "react";
import { Container } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap'
import {useRef} from 'react';

const AddReview = () => {
  const nameRef=useRef()
  const imgRef=useRef()
  const revRef=useRef()

  const handleAddReview=(e)=>{
    const name=nameRef.current.value
    const img=imgRef.current.value
    const rev=revRef.current.value

    const newService={name,img,rev}

    fetch("http://localhost:5000/extra",{method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(newService),})
    .then(res=>res.json())
    .then((data) => {
      if(data.insertedId) {
        alert('Succesfully Added!')
      }
    })
    e.preventDefault()
  }


  return (
    <div className="AddReview">
      <div className="addser"><h1>Add New Review</h1></div>
      <Container>
      <Form onSubmit={handleAddReview}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Review</Form.Label>
          <Form.Control ref={revRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control ref={imgRef} type="text" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Review
        </Button>
      </Form>
      </Container>
    </div>
  )
}

export default AddReview;
