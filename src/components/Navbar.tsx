import React, { useState } from "react"
import { Link } from "gatsby"

const DefaultNavbar = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container-xl ps-sm-4 pe-sm-4">
        <Link
          to="/"
          className="navbar-brand"
          style={{ textDecoration: "underline" }}
        >
          Angel Hurtado
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#defaultNavbar"
          aria-controls="defaultNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Ir a" : "Cerrar"}
        </button>
        <div
          className={collapsed ? "collapse navbar-collapse" : "navbar-collapse"}
          id="defaultNavbar"
        >
          <ul className="navbar-nav me-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/#about"
                className="nav-link"
                style={{ textDecoration: "underline" }}
              >
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#skills"
                className="nav-link"
                style={{ textDecoration: "underline" }}
              >
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#projects"
                className="nav-link"
                style={{ textDecoration: "underline" }}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#posts"
                className="nav-link"
                style={{ textDecoration: "underline" }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DefaultNavbar
