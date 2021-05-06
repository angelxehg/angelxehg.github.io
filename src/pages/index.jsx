import React from "react"
import { Link } from "gatsby"

import CenterLayout from "@layouts/center"
import SEO from "@components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "@components/social"
import { Icon } from "@components/icons"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Card, Col, Row } from "react-bootstrap"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <CenterLayout>
      <SEO title="Inicio" lang="es" />
      <Card className="pt-3">
        <ProfileImage />
        <Card.Body>
          <Link to="/">
            <h1 className="card-title">{site.title}</h1>
          </Link>
          <Card.Text className="m-0">
            {site.description}
          </Card.Text>
          <Row className="mt-2">
            <Col>
              <Link to="/projects" className="me-3">
                Mis proyectos
              </Link>
              <Link to="/about">
                Acerca de mi
              </Link>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <LinkExternal
                to="mailto:sudo@angelxehg.com"
                title="Email (sudo@angelxehg.com)"
              >
                <Icon name="Email" size="1.5rem" />
              </LinkExternal>
              {socialLinks.map(({ title, to, icon }) => (
                <LinkExternal key={to} to={to} title={title}>
                  <Icon name={icon} size="1.5rem" />
                </LinkExternal>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </CenterLayout>
  )
}

export default IndexPage
