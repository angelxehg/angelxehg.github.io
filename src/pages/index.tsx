import React from "react"
import { Link } from "gatsby"

import { CentralLayout } from "../components/layout"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage } from "../components/social"
import {
  EmailIcon,
  GitHubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedInIcon,
  PayPalIcon,
  TwitterIcon,
} from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <CentralLayout>
      <SEO title="Inicio" />
      <div className="card no-bg pt-3 divr">
        <ProfileImage />
        <div className="card-body">
          <Link to="/" style={{ color: "white" }}>
            <h1 className="card-title">{site.title}</h1>
          </Link>
          <p className="card-text">{site.description}</p>
          <div className="row">
            <div className="col">
              <Link to="/posts" className="me-3">
                Blog
              </Link>
              <Link to="/projects" className="me-3">
                Proyectos
              </Link>
              <Link to="/about">
                Trayectoria
              </Link>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <LinkExternal
                to="mailto:contact@angelxehg.com"
                title="Email (contact@angelxehg.com)"
              >
                <EmailIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.linkedin.com/in/angelxehg"
                title="LinkedIn (/in/angelxehg)"
              >
                <LinkedInIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.paypal.me/angelxehg"
                title="PayPal (@angelxehg)"
              >
                <PayPalIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://github.com/angelxehg"
                title="GitHub (@angelxehg)"
              >
                <GitHubIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://gitlab.com/angelxehg"
                title="GitLab (@angelxehg)"
              >
                <GitlabIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.twitter.com/angelxehg"
                title="Twitter (@angelxehg)"
              >
                <TwitterIcon size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.instagram.com/angelxehg"
                title="Instagram (@angelxehg)"
              >
                <InstagramIcon size="1.5rem" />
              </LinkExternal>
            </div>
          </div>
        </div>
      </div>
    </CentralLayout>
  )
}

export default IndexPage
