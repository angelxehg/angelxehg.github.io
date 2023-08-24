import React, { useState } from "react"
import { Link } from "gatsby"

const ListSVG = require("../assets/bootstrap-icons/list.svg")

const DefaultNavbar = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav className={`navbar sticky-top navbar-expand-md`}>
      <div className="container-lg ps-sm-4 pe-sm-4">
        <Link to="/" className="navbar-brand">
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
          <ListSVG
            style={{
              height: "1.8rem",
              width: "1.8rem",
            }}
          />
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DefaultNavbar
