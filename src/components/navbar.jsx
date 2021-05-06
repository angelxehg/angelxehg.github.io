import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const DefaultNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <Container fluid="sm">
      <Link className="navbar-brand" to="/">
        Angel Hurtado
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Link className="nav-link" to="/projects" activeClassName="active">
              Mis proyectos
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Link className="nav-link" to="/about" activeClassName="active">
              Acerca de mi
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default DefaultNavbar
