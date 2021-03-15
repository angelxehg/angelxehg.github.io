import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


export const Navbar = (props) => (
  <nav className="navbar navbar-expand-sm navbar-dark sticky-top pg-bg divr">
    <div className="container-fluid">
      {props.children}
    </div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export const NavbarBrand = (props) => (
  <Link className="navbar-brand" to={props.to} style={{ color: "white" }}>
    {props.title}
  </Link>
)

NavbarBrand.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export const NavbarToggler = () => (
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

export const NavbarCollapse = (props) => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      {props.children}
    </ul>
  </div>
)

NavbarCollapse.propTypes = {
  children: PropTypes.node.isRequired,
}

export const NavbarItem = (props) => (
  <li className="nav-item">
    <Link className="nav-link" activeClassName="active" to={props.to}>
      {props.title}
    </Link>
  </li>
)

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
