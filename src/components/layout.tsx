import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import {
  LinkEmailLabel,
  LinkGitHub,
  LinkGitLab,
  LinkInstagram,
  LinkLinkedIn,
  LinkPaypal,
  LinkTwitter,
} from "./social"

export const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top pg-bg divr">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          {site.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/posts">Blog</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const PageFooter = () => (
  <footer>
    <nav className="navbar navbar-dark pg-bg divr">
      <div className="row ps-3" style={{ width: '100%' }}>
        <div className="col text-lg-end text-start order-lg-last">
          <LinkLinkedIn />
          <LinkPaypal />
          <LinkGitHub />
          <LinkGitLab />
          <LinkTwitter />
          <LinkInstagram />
          <br />
          <LinkEmailLabel />
        </div>
        <div className="col-sm-auto mt-lg-0 mt-3">
          © {new Date().getFullYear()}, Angel Hurtado
          <br />
          Iconos de{" "}
          <a href="https://fontawesome.com/license">FontAwesome</a>,{" "}
          <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>,{" "}
          <a href="https://seeklogo.com/">SeekLogo</a>
        </div>
      </div>
    </nav>
  </footer>
)

const Layout = (props: { children: any; complex: boolean }) => {
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <PageHeader />
      <div className="container-fluid pt-2 pb-3">
        <main>{props.children}</main>
      </div>
      <PageFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  complex: false,
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
