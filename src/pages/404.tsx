import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import CenterLayout from "../layouts/Center"
import SEO from "../components/SEO"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <Card bg="dark" text="light" as="main">
      <ConcernedSVG
        style={{ width: "5rem", height: "5rem" }}
        className="align-self-center mt-2"
      />
      <Card.Body>
        <Card.Title as="h1" className="h5">
          404 Not Found
        </Card.Title>
        <Card.Text className="m-0">
          La página que buscas no existe.{" "}
          <Link to="/">Ir a página principal</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  </CenterLayout>
)

export default NotFoundPage
