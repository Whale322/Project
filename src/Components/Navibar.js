import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NaviBar() {
  const [show, setShow] = useState(false);
  const handlClose = () => setShow(false);
  const handlShow = () => setShow(true);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Git Hub Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr=auto">
            <Nav.Link>
              <Link to="list">List of repositories</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="last">Last repositories</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2" onClick={handlShow}>
              Log In
            </Button>
            <Button variant="primary" onClick={handlShow}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handlClose}>
        <Modal.Header closeButton>  
          <Modal.Body>
            <Form>
              <Form.Group controlId="fromBasickName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group controlId="fromBasickSurname">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="surname" placeholder="Enter Surname" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}
