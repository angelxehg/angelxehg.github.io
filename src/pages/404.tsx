import React from "react"
import { Link } from "gatsby"

import { CentralLayout } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <CentralLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>No se encuentra la página</p>
    <Link to="/">Ir al Inicio</Link>
  </CentralLayout>
)

export default NotFoundPage
