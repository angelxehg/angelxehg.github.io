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

import { ProfileImage } from "./social"


const Header = () => {
  const site = useSiteMetadata()
  return (
    <div className="card no-bg">
      <div className="card-body">
        <div className="row">
          <div className="col-md-auto text-center">
            <ProfileImage />
          </div>
          <div className="col text-center text-md-start">
            <Link to="/">
              <h1 className="card-title">{site.title}</h1>
            </Link>
            <p className="card-text">{site.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className="mt-5">
    <div className="card no-bg">
      <p className="card-text">© {new Date().getFullYear()}, Angel Hurtado. Iconos de <a href="https://fontawesome.com/license" >FontAwesome</a>, <a href="https://icons.getbootstrap.com/" >Bootstrap Icons</a>, <a href="https://seeklogo.com/" >SeekLogo</a></p>
    </div>
  </footer>
)

const Layout = (props: { children: any }) => {
  return (
    <div className="container-sm mt-5 mb-5 text-white font-monospace">
      <Header />
      <main className="mt-5">{props.children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CentralLayout = (props: { children: any }) => (
  <div className="row text-center justify-content-center full-h text-white font-monospace">
    <div className="col align-self-center fill-sm">{props.children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
