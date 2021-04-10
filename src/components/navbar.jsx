import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export const Navbar = props => (
  <nav className="navbar navbar-expand-sm navbar-dark sticky-top pg-bg divr">
    <div className="container-fluid">{props.children}</div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

const NavbarBrand = props => (
  <Link className="navbar-brand" to={props.to} style={{ color: "white" }}>
    {props.title}
  </Link>
)

NavbarBrand.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const NavbarToggler = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
)

const NavbarCollapse = props => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">{props.children}</ul>
  </div>
)

NavbarCollapse.propTypes = {
  children: PropTypes.node.isRequired,
}

const NavbarItem = props => (
  <li className="nav-item">
    <Link className="nav-link" to={props.to}>
      {props.title}
    </Link>
  </li>
)

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const DefaultNavbar = () => (
  <Navbar>
    <NavbarBrand title="Portafolio de Angel" to="/projects" />
    <NavbarCollapse>
      {/* <NavbarItem title="Blog" to="https://blog.angelxehg.com/" /> */}
      <NavbarItem title="Resumen" to="/" />
      <NavbarItem title="Acerca de" to="/about" />
    </NavbarCollapse>
  </Navbar>
)

export default DefaultNavbar
