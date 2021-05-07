import React from "react"
import { Link } from "gatsby"

const DefaultNavbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top" bg="dark">
    <div className="container-sm">
      <Link className="navbar-brand" to="/">
        Angel Hurtado
      </Link>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/projects" activeClassName="active">
            Proyectos
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/about" activeClassName="active">
            Acerca de
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default DefaultNavbar
