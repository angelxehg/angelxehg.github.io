import { Link } from "gatsby"
import React from "react"

import { PageFooter } from "../components/layout"
import SEO from "../components/seo"
import { ProfileImage, LinkEmailLabel, LinkLinkedIn, LinkPaypal, LinkGitHub, LinkGitLab, LinkTwitter, LinkInstagram } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"

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
          <div className="col text-center text-md-start mt-3 mt-md-0">
            <Link to="/" style={{ color: 'white' }}>
              <h1 className="card-title">{site.title}</h1>
            </Link>
            <p className="card-text d-none d-md-block">{site.description}</p>
            <div className="row mt-2">
              <div className="col-lg text-lg-start text-center">
                <Link to="/posts" className="me-3">Blog</Link>
                <Link to="/projects" className="me-3">Proyectos</Link>
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

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <ComplexPageHeader />
      <SEO title="Acerca de" />
      <main>
        <div className="card no-bg">
          <div className="card-body">
            <h2 className="card-title">Acerca de mi</h2>
            <p className="card-text d-block d-md-none">{site.description}</p>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}

export default AboutPage
