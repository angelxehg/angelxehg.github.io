import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import Card from "react-bootstrap/Card"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"

const ConcernedSVG = require("../assets/concerned.svg")

const AboutPage = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigate("/"), 2000)
  }, [])
  return (
    <CenterLayout>
      <SEO title="301: Moved Permanently" lang="es" />
      <Card>
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <Card.Body>
          <Card.Title>301: Moved Permanently</Card.Title>
          <Card.Text className="m-0">
            Redireccionando a <Link to="/">portafolio</Link>...
          </Card.Text>
        </Card.Body>
      </Card>
    </CenterLayout>
  )
}

export default AboutPage
