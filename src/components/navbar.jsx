import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { LinkExternal, socialLinks } from "./social"
import { Icon } from "./icons"

const DefaultNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
    <Container fluid="md">
      <Link className="navbar-brand" to="/">
        Angel Hurtado
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Link className="nav-link" to="/projects" activeClassName="active">
              Proyectos
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/about" activeClassName="active">
              Acerca de
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item className="m-sm-0 m-2">
            <LinkExternal
              to="mailto:sudo@angelxehg.com"
              title="Email (sudo@angelxehg.com)"
            >
              <Icon name="Email" />
            </LinkExternal>
            {socialLinks.map(({ title, to, icon }) => (
              <LinkExternal key={to} to={to} title={title}>
                <Icon name={icon} />
              </LinkExternal>
            ))}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default DefaultNavbar
