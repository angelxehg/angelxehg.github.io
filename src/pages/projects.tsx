import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { usePages } from "../hooks/use-pages"
import ProjectCard from "../components/project"

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <div>
      <SEO title="Proyectos" lang="es" />
      <Container fluid="xl" className="ps-md-4 pe-md-4 pt-3 pb-3">
        <h2 className="h3">Todos mis proyectos</h2>
        <p>Estos son todos mis proyectos públicos</p>
        <Row>
          {projects.map(item => (
            <Col key={item.id} xs="12" className="p-md-1 pb-2">
              <ProjectCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage
