import React from "react"
import { navigate } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"

const AboutPage = () => {
  navigate('/')
  return (
    <CenterLayout>
      <SEO title="Redireccionando" lang="es" />
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Redireccionando...</h1>
          <p className="card-text m-0">Espere un momento</p>
        </div>
      </div>
    </CenterLayout>
  )
}

export default AboutPage
