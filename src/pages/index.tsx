import { Link } from "gatsby"
import React from "react"

import { CentralLayout } from "../components/layout"
import SEO from "../components/seo"
import { LinkEmail, LinkGitHub, LinkGitLab, LinkInstagram, LinkLinkedIn, LinkPaypal, LinkTwitter, ProfileImage } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return <CentralLayout>
    <SEO title="Inicio" />
    <div className="card no-bg pt-3 divr">
      <ProfileImage />
      <div className="card-body">
        <Link to="/" style={{ color: 'white' }}>
          <h1 className="card-title">{site.title}</h1>
        </Link>
        <p className="card-text">{site.description}</p>
        <div className="row">
          <div className="col">
            <Link to="/posts" className="me-3">Blog</Link>
            <Link to="/projects" className="me-3">Proyectos</Link>
            <Link to="/about" className="me-3">Acerca de</Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <LinkEmail iconSize="1.5rem" />
            <LinkLinkedIn iconSize="1.5rem" />
            <LinkPaypal iconSize="1.5rem" />
            <LinkGitHub iconSize="1.5rem" />
            <LinkGitLab iconSize="1.5rem" />
            <LinkTwitter iconSize="1.5rem" />
            <LinkInstagram iconSize="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  </CentralLayout>
}

export default IndexPage
