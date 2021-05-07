import React from "react"
import { Link } from "gatsby"

import CenterLayout from "@layouts/center"
import SEO from "@components/seo"
import { Card } from "react-bootstrap"

const NotFoundPage = () => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <Card className="bg-dark">
      <Card.Body>
        <h1 className="card-title">404 Not Found</h1>
        <Card.Text className="m-0">La página que buscas no existe</Card.Text>
        <Link to="/projects">Ir al Portafolio</Link>
      </Card.Body>
    </Card>
  </CenterLayout>
)

export default NotFoundPage
