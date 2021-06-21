import React, { useState } from "react"
import { Link } from "gatsby"
import { useTheme } from "./Theme"

const DefaultNavbar = (): JSX.Element => {
  const { theme, toggle } = useTheme()
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav className="navbar sticky-top navbar-expand-sm">
      <div className="container-sm ps-sm-4 pe-sm-4">
        <Link to="/" className="navbar-brand text-reset">
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
              <Link to="/#about" className="nav-link text-reset">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#skills" className="nav-link text-reset">
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#projects" className="nav-link text-reset">
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#posts" className="nav-link text-reset">
                Blog
              </Link>
            </li>
            <button onClick={toggle}>Theme: {theme}</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DefaultNavbar
