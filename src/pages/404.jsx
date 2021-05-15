import React from "react"
import { Link } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" image="images/404.Opt.png" />
    <div className="card bg-dark">
      <div className="card-body">
        <h1 className="h3 card-title">404 Not Found</h1>
        <p className="card-text m-0">La página que buscas no existe</p>
        <Link to="/projects">Ir al Portafolio</Link>
      </div>
    </div>
  </CenterLayout>
)

export default NotFoundPage
