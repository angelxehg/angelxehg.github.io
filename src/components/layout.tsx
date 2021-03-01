/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

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

const Footer = () => (
  <footer className="mt-5">
    <div className="card no-bg">
      <p className="card-text">
        © {new Date().getFullYear()}, Angel Hurtado
      </p>
    </div>
  </footer>
)

const Layout = (props: { children: any }) => {

  return (
    <div className="container-sm mt-5 mb-5 text-white font-monospace">
      <Header/>
      <main className="mt-5">{props.children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
