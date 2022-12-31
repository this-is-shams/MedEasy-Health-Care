import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json, useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

const UpdateService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedService = {
      name: updatedName,
      price: service.price,
      des: service.des,
      img: service.img,
    }
    setService(updatedService)
  }

  const handlePriceChange = (e) => {
    const updatePriceChange = e.target.value;
    const updatedService = {
      name: service.name,
      price: updatePriceChange,
      des: service.des,
      img: service.img,
    }
    setService(updatedService)
  }

  const handleDesChange = (e) => {
    const updateDesChange = e.target.value;
    const updatedService = {
      name: service.name,
      price: service.price,
      des: updateDesChange,
      img: service.img,
    }
    setService(updatedService)
  }

  const handleImgChange = (e) => {
    const updateImgChange = e.target.value;
    const updatedService = {
      name: service.name,
      price: service.price,
      des: service.des,
      img: updateImgChange,
    }
    setService(updatedService)
  }

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/services/${serviceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Update Successful')
          setService({})
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Container>
      <Form onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || ""}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="text"
            value={service.price || ""}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={service.des || ""}
            onChange={handleDesChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={service.img || ""}
            onChange={handleImgChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      </Container>
    </div>
  )
}

export default UpdateService;
