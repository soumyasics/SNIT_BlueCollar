import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <div className='home-hero'>
      <div className='home-hero-heading mx-5 p-5 mb-5'>
        Get Your Hands Dirty on Your Terms: Find Blue-Collar Jobs Now!
      </div>
      <Container className="text-center">
        <Row>
          <Col className="mx-1">
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Job Name"
                aria-label="JobName"
                aria-describedby="basic-input"
                className="custom-placeholder py-2"
              />
            </InputGroup>
          </Col>
          <Col className="mx-1">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Category"
                aria-label="Text input dropdown button"
                className="custom-placeholder py-2"
              />
              <DropdownButton
                variant="light"
                title=""
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Category1</Dropdown.Item>
                <Dropdown.Item href="#">Category2</Dropdown.Item>
                <Dropdown.Item href="#">Category3</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col className="mx-1">
            <div className="d-grid gap-1">
              <Button variant="warning" className="text-white fs-6 py-2">Search Job</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero;
