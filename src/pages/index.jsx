import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "../components/seo"
import DefaultNavbar from "../components/navbar"
import DefaultFooter from "../components/footer"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Icon } from "../components/icons"
import { LinkExternal, socialLinks } from "../components/social"

import EducationSection from "../sections/education"
import SkillsSection from "../sections/skills"
import ProjectsSection from '../sections/projects'

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Inicio" lang="es" />
      <DefaultNavbar />
      <Container fluid="md" className="pt-3 pb-3">
        <header>
          <h1>{site.title}</h1>
          <p>{site.description}</p>
          <p>
            <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
              <Icon name="Email" className="me-1" />
              sudo@angelxehg.com
            </LinkExternal>
            <br className="d-block d-sm-none" />
            {socialLinks.map(({ title, to, icon }) => (
              <LinkExternal key={to} to={to} title={title}>
                <Icon name={icon} />
              </LinkExternal>
            ))}
          </p>
        </header>
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default IndexPage
