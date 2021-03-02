import React from "react"
import { Link } from "gatsby"

import { CentralLayout } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <CentralLayout>
    <SEO title="404: Not found" />
    <div className="card no-bg divr">
      <div className="card-body">
        <h1 className="card-title">404: Not Found</h1>
        <p className="card-text">No se encuentra la página</p>
        <Link to="/">Ir al Inicio</Link>
      </div>
    </div>
  </CentralLayout>
)

export default NotFoundPage
