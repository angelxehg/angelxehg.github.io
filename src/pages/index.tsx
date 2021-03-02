import React from "react"

import { CentralLayout } from "../components/layout"
import SEO from "../components/seo"
import { LinkAbout, LinkBlog, LinkEmail, LinkGitHub, LinkGitLab, LinkInstagram, LinkLinkedIn, LinkPaypal, LinkProjects, LinkTwitter, LinkWebsite, ProfileImage } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return <CentralLayout>
    <SEO title="Inicio" />
    <div className="card no-bg">
      <ProfileImage/>
      <div className="card-body">
        <h1 className="card-title">{site.title}</h1>
        <p className="card-text">{site.description}</p>
      </div>
      <div className="row">
        <div className="col">
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
      <div className="row mt-3">
        <div className="col">
          <LinkBlog showTitle={true} />
          <LinkProjects showTitle={true} />
          <LinkAbout showTitle={true} />
        </div>
      </div>
    </div>
  </CentralLayout>
}

export default IndexPage
