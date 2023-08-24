import React from "react"
import { Link } from "gatsby"

const DefaultNavbar = (): JSX.Element => {
  return (
    <nav className={`navbar sticky-top bg-body-tertiary`}>
      <div className="container-lg ps-sm-4 pe-sm-4">
        <Link to="/" className="navbar-brand">
          Angel Hurtado
        </Link>
      </div>
    </nav>
  )
}

export default DefaultNavbar
