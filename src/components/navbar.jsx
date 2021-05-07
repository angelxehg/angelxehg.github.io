import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const DefaultNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <Container fluid="md">
      <Link className="navbar-brand" to="/">
        Angel Hurtado
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#education">Educación</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default DefaultNavbar
