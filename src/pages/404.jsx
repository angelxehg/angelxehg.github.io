import React from "react"
import { Link } from "gatsby"

import { CentralLayout } from "@components/layout"
import SEO, { Version } from "@components/seo"

const NotFoundPage = () => (
  <CentralLayout>
    <SEO title="404: Not found" lang="es" />
    <div className="card no-bg divr">
      <div className="card-body">
        <h1 className="card-title">404: Not Found</h1>
        <p className="card-text m-0">La página que buscas no existe!</p>
        <Link to="/projects">Ir al Portafolio</Link>
      </div>
    </div>
    <Version />
  </CentralLayout>
)

export default NotFoundPage
