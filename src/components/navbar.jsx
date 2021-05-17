import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const DefaultNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <div className="container-xl ps-md-4 pe-md-4">
      <Link
        to="/"
        className="navbar-brand"
        style={{ textDecoration: "underline" }}
      >
        Angel Hurtado
      </Link>
      <Navbar.Toggle aria-controls="default-navbar" />
      <Navbar.Collapse id="default-navbar">
        <Nav className="me-auto">
          <li className="nav-item">
            <Link
              to="/posts"
              className="nav-link"
              activeClassName="active"
              style={{ textDecoration: "underline" }}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              activeClassName="active"
              style={{ textDecoration: "underline" }}
            >
              Proyectos
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

export default DefaultNavbar
