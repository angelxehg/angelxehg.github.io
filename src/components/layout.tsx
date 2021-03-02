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

import { LinkAbout, LinkBlog, LinkEmail, LinkGitHub, LinkGitLab, LinkInstagram, LinkLinkedIn, LinkPaypal, LinkProjects, LinkTwitter, LinkWebsite, ProfileImage } from "./social"


export const CompleteHeader = () => {
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
            <div className="row mt-3 text-end">
              <div className="col-md mt-2 mt-md-0">
                <LinkBlog showTitle={true} />
              </div>
              <div className="col-md-auto mt-2 mt-md-0">
                <LinkProjects showTitle={true} />
              </div>
              <div className="col-md-auto mt-2 mt-md-0">
                <LinkAbout showTitle={true} />
              </div>
              <div className="col-lg-auto mt-2 mt-md-0">
                <LinkWebsite />
                <LinkEmail />
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
    <div className="card bg-dark">
      <div className="card-body pb-sm-2">
        <div className="row">
          <div className="col-sm-auto">
            <Link to="/">
              <p className="card-title h5">{site.title}</p>
            </Link>
          </div>
          <div className="col">
            <p className="card-text">{site.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className="mt-3">
    <div className="card bg-dark">
      <div className="card-body">
        <p className="card-text">© {new Date().getFullYear()}, Angel Hurtado. Iconos de <a href="https://fontawesome.com/license" >FontAwesome</a>, <a href="https://icons.getbootstrap.com/" >Bootstrap Icons</a>, <a href="https://seeklogo.com/" >SeekLogo</a></p>
      </div>
    </div>
  </footer>
)

const Layout = (props: { children: any }) => {
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <PageHeader />
      <main className="mt-3">{props.children}</main>
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
