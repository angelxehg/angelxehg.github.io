import React from "react"
import { Link } from "gatsby"

import DefaultFooter from "@components/footer"
import DefaultNavbar from "@components/navbar"
import SEO from "@components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "@components/social"
import { Icon } from "@components/icons"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Col, Container, Row } from "react-bootstrap"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <Row className="text-center text-sm-start">
      <Col sm="auto">
        <ProfileImage />
      </Col>
      <Col>
        <header className="m-sm-0 mt-2">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </header>
        <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
          <Icon name="Email" className="me-1" size="1.5rem" />
          sudo@angelxehg.com
        </LinkExternal>
        <br className="d-block d-sm-none" />
        {socialLinks.map(({ title, to, icon }) => (
          <LinkExternal key={to} to={to} title={title}>
            <Icon name={icon} size="1.5rem" />
          </LinkExternal>
        ))}
      </Col>
    </Row>
  )
}

const IndexPage = () => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <Container fluid="md" className="pt-3 pb-3">
      <PageHeader />
    </Container>
    <DefaultFooter />
  </div>
)

export default IndexPage
