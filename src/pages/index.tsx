import React from "react"
import { Link } from "gatsby"

import { CentralLayout } from "../components/layout"
import SEO, { Version } from "../components/seo"
import { LinkExternal, ProfileImage } from "../components/social"
import { Icons, Icon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <CentralLayout>
      <SEO title="Inicio" lang="es"/>
      <div className="card no-bg divr">
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
                <Icon name={Icons.Email}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.linkedin.com/in/angelxehg"
                title="LinkedIn (/in/angelxehg)"
              >
                <Icon name={Icons.LinkedIn}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.paypal.me/angelxehg"
                title="PayPal (@angelxehg)"
              >
                <Icon name={Icons.PayPal}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://github.com/angelxehg"
                title="GitHub (@angelxehg)"
              >
                <Icon name={Icons.GitHub}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://gitlab.com/angelxehg"
                title="GitLab (@angelxehg)"
              >
                <Icon name={Icons.GitLab}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.twitter.com/angelxehg"
                title="Twitter (@angelxehg)"
              >
                <Icon name={Icons.Twitter}  size="1.5rem" />
              </LinkExternal>
              <LinkExternal
                to="https://www.instagram.com/angelxehg"
                title="Instagram (@angelxehg)"
              >
                <Icon name={Icons.Instagram}  size="1.5rem" />
              </LinkExternal>
            </div>
          </div>
        </div>
      </div>
      <Version />
    </CentralLayout>
  )
}

export default IndexPage
