import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Acerca de" />
    <div className="card no-bg">
      <div className="card-body">
        <h1 className="card-title">Acerca de</h1>
        <p className="card-text">Esta es mi descripción</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
