import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const site = useSiteMetadata();
  return (
    <div className="card no-bg">
      <Link to="/">
        <h1 className="card-title">{site.title}</h1>
      </Link>
      <p className="card-text">{site.description}</p>
    </div>
  )
}

export default Header
