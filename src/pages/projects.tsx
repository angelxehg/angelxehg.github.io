import React from "react"
import Container from "react-bootstrap/Container"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { usePages } from "../hooks/use-pages"
import DefaultNavbar from "../components/navbar"
import ProjectCard from "../components/project"

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <div>
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <Container fluid="xl" className="ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mis proyectos</h1>
        <p>Estos son todos mis proyectos públicos</p>
        <h2 className="h4">Últimos proyectos</h2>
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-12 p-md-1 pb-2">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage
