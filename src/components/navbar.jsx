import React from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

const DefaultNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <Container fluid="sm">
      <Link className="navbar-brand" to="/projects">
        Proyectos de Angel
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Link className="nav-link" to="/">
              Resumen
            </Link>
          </Nav.Item>
          {/* <Nav.Link href="https://blog.angelxehg.com/">Blog</Nav.Link> */}
          <Nav.Item>
            <Link className="nav-link" to="/about">
              Acerca de
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default DefaultNavbar
