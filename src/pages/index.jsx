import React from "react"
import { Link } from "gatsby"

import CenterLayout from "@layouts/center"
import SEO from "@components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "@components/social"
import { Icon } from "@components/icons"
import { useSiteMetadata } from "@hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <CenterLayout>
      <SEO title="Inicio" lang="es" />
      <div className="card no-bg divr pt-3">
        <ProfileImage />
        <div className="card-body">
          <Link to="/" style={{ color: "white" }}>
            <h1 className="card-title">{site.title}</h1>
          </Link>
          <p className="card-text">{site.description}</p>
          <div className="row">
            <div className="col">
              {/* <Link to="/posts" className="me-3">Blog</Link> */}
              <Link to="/projects" className="me-3">
                Proyectos
              </Link>
              <Link to="/about">Acerca de</Link>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <LinkExternal
                to="mailto:contact@angelxehg.com"
                title="Email (contact@angelxehg.com)"
              >
                <Icon name="Email" size="1.5rem" />
              </LinkExternal>
              {socialLinks.map(({ title, to, icon }) => (
                <LinkExternal key={to} to={to} title={title}>
                  <Icon name={icon} size="1.5rem" />
                </LinkExternal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  )
}

export default IndexPage
