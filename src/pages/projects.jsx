import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Footer from "@components/footer"
import SEO from "@components/seo"
import { useContents } from "@hooks/use-contents"
import { Icon, LinkIcon } from "@components/icons"
import { LinkExternal } from "@components/social"
import DefaultNavbar from "@components/navbar"
import { Col, Row } from "react-bootstrap"

const Project = props => {
  const { slug, title, extract, image, stack, github, demo } = props
  const stackIcons = stack.split(",")
  return (
    <Col xl="4" md="6" className="p-md-1 p-0">
      <div className="card">
        <GatsbyImage image={image} alt={title} />
        <div className="card-body pt-3 pb-3 p-2">
          <div className="row align-items-center">
            <div className="col-auto">
              <Link to={"/" + slug}>
                <h2 className="card-title m-0">{title}</h2>
              </Link>
            </div>
            <div className="col-auto p-0">
              {github && (
                <LinkExternal to={github} title="Repositorio">
                  <Icon name="GitHub" size="1.5rem" />
                </LinkExternal>
              )}
              {demo && (
                <LinkExternal to={demo} title="Demo">
                  <Icon name="Web" size="1.5rem" />
                </LinkExternal>
              )}
            </div>
          </div>
          {stackIcons.map(icon => (
            <LinkIcon key={icon} name={icon} />
          ))}
          <p className="card-text">{extract}</p>
        </div>
      </div>
    </Col>
  )
}

Project.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  extract: PropTypes.string,
  image: PropTypes.object,
  stack: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
}

const ProjectsPage = () => {
  const projects = useContents("project")
  return (
    <Container fluid="sm" className="mt-3 mb-3">
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <Container fluid={true} className="pt-3 pb-3">
        <main>
          <Row className="ps-2 pe-2 mt-1">
            {projects.map(
              ({ slug, title, extract, image, stack, github, demo }) => (
                <Project
                  key={slug}
                  slug={slug}
                  title={title}
                  extract={extract}
                  image={image}
                  stack={stack}
                  github={github}
                  demo={demo}
                />
              )
            )}
          </Row>
        </main>
      </Container>
      <Footer />
    </Container>
  )
}

export default ProjectsPage
