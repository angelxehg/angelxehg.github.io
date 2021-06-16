import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"
import { getLinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

interface ProjectCardProps {
  item: Page
}

export const ProjectCard = (
  props: ProjectCardProps & { titleAs?: "h2" | "h3" }
): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <Card bg="dark" text="light" as="article">
      <GatsbyImage image={image} alt={caption} className="card-img-top" />
      <Card.Body>
        <Card.Title as={props.titleAs || "h2"} className="h5">
          <Link to={`/${slug}`}>{title}</Link>
        </Card.Title>
        <Card.Text className="m-0">{resume}</Card.Text>
        <Card.Text className="mt-1">
          Hecho con{": "}
          {stackIcons.map(toolName => {
            const link = getLinkMeta(toolName)
            return (
              <Badge
                key={toolName}
                pill
                bg="dark"
                text="light"
                className="mt-1 me-1"
              >
                <IconLink meta={link} />
              </Badge>
            )
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <DefaultNavbar />
      <Container as="header" className="mt-3">
        <h1>Todos mis proyectos</h1>
        <p>Estos son todos mis proyectos públicos</p>
      </Container>
      <Container as="main" className="mt-3">
        <Row>
          {projects.map(item => (
            <Col key={item.id} md="6" xl="4" className="p-md-1 pb-2">
              <ProjectCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
