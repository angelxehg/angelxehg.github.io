import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const DefaultNavbar = (): JSX.Element => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <Container>
      <Link
        to="/"
        className="navbar-brand"
      >
        Angel Hurtado
      </Link>
      <Navbar.Toggle aria-controls="default-navbar" />
      <Navbar.Collapse id="default-navbar">
        <Nav className="me-auto">
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              activeClassName="active"
            >
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#skills"
              className="nav-link"
            >
              Habilidades
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#about"
              className="nav-link"
            >
              Acerca de
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default DefaultNavbar
