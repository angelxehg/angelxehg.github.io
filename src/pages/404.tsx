import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <Card>
      <ConcernedSVG
        style={{ width: "5rem", height: "5rem" }}
        className="align-self-center mt-2"
      />
      <Card.Body>
        <Card.Title>404 Not Found</Card.Title>
        <Card.Text className="m-0">La página que buscas no existe</Card.Text>
        <Link to="/projects">Ir al Portafolio</Link>
      </Card.Body>
    </Card>
  </CenterLayout>
)

export default NotFoundPage
