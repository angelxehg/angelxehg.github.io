import React from "react"
import { Link } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <div className="card">
      <ConcernedSVG
        style={{ width: "5rem", height: "5rem" }}
        className="align-self-center mt-2"
      />
      <div className="card-body">
        <h1 className="h3 card-title">404 Not Found</h1>
        <p className="card-text m-0">La página que buscas no existe</p>
        <Link to="/projects">Ir al Portafolio</Link>
      </div>
    </div>
  </CenterLayout>
)

export default NotFoundPage
