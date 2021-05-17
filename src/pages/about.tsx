import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

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
      <div className="card bg-dark">
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <div className="card-body">
          <h1 className="h3 card-title">301: Moved Permanently</h1>
          <p className="card-text m-0">
            Redireccionando a <Link to="/">portafolio</Link>...
          </p>
        </div>
      </div>
    </CenterLayout>
  )
}

export default AboutPage
