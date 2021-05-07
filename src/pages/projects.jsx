import React from "react"
import { navigate } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "@components/seo"
import { Card } from "react-bootstrap"

setTimeout(() => navigate('/#projects'), 2000)

const ProjectsPage = () => {
  return (
    <CenterLayout>
      <SEO title="404: Not found" lang="es" />
      <Card className="bg-dark">
        <Card.Body>
          <h1 className="card-title">301: Moved Permanently</h1>
          <Card.Text className="m-0">
            Redireccionando a Proyectos...
          </Card.Text>
        </Card.Body>
      </Card>
    </CenterLayout>
  )
}

export default ProjectsPage
