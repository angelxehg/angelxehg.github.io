import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import { LinkEmailLabel, LinkGitHub, LinkGitLab, LinkInstagram, LinkLinkedIn, LinkPaypal, LinkTwitter, ProfileImage } from "./social"


const ComplexPageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="card no-bg divr">
      <div className="card-body">
        <div className="row">
          <div className="col-md-auto">
            <div className="row">
              <div className="col d-block d-md-none"></div>
              <div className="col-auto"><ProfileImage /></div>
              <div className="col d-block d-md-none"></div>
            </div>
          </div>
          <div className="col text-center text-md-start">
            <Link to="/">
              <h1 className="card-title">{site.title}</h1>
            </Link>
            <p className="card-text">{site.description}</p>
            <div className="row mt-3">
              <div className="col-lg text-lg-start text-center">
                <Link to="/posts" className="me-3">Blog</Link>
                <Link to="/projects" className="me-3">Proyectos</Link>
                <Link to="/about" className="me-3">Acerca de</Link>
              </div>
              <div className="col-lg-auto mt-2 mt-lg-0 text-lg-end text-center">
                <LinkEmailLabel />
                <br className="d-block d-sm-none" />
                <LinkLinkedIn />
                <LinkPaypal />
                <LinkGitHub />
                <LinkGitLab />
                <LinkTwitter />
                <LinkInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="card no-bg divr">
      <div className="card-body pb-sm-2">
        <div className="row">
          <div className="col-sm-auto">
            <Link to="/" style={{ color: 'white' }}>
              <p className="card-title h5 mb-sm-2 mb-0">{site.title}</p>
            </Link>
          </div>
          <div className="col-sm mt-sm-0 mt-2">
            <Link to="/posts" className="me-3">Blog</Link>
            <Link to="/projects" className="me-3">Proyectos</Link>
            <Link to="/about" className="me-3">Acerca de</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const PageFooter = () => (
  <footer>
    <div className="card no-bg divr">
      <div className="card-body">
        <div className="row">
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
            <p className="card-text">
              © {new Date().getFullYear()}, Angel Hurtado
              <br />
              Iconos de <a href="https://fontawesome.com/license" >FontAwesome</a>, <a href="https://icons.getbootstrap.com/" >Bootstrap Icons</a>, <a href="https://seeklogo.com/" >SeekLogo</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

const Layout = (props: { children: any, complex: boolean }) => {
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      {props.complex ? <ComplexPageHeader /> : <PageHeader />}
      <main>{props.children}</main>
      <PageFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  complex: false
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
