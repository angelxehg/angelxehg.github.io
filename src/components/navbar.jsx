import React from "react"
import { Link } from "gatsby"

const DefaultNavbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-xl ps-md-4 pe-md-4">
      <Link
        to="/"
        className="navbar-brand"
        style={{ textDecoration: "underline" }}
      >
        Angel Hurtado
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/posts" className="nav-link" activeClassName="active">
            Blog
          </Link>
          <Link to="/projects" className="nav-link" activeClassName="active">
            Proyectos
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default DefaultNavbar
