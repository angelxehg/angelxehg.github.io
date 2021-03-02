import React from "react"

import Layout, { Content, Header } from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Proyectos" />
    <Header title="Proyectos" description="Estos son mis proyectos"/>
    <Content>
      Hola mundo
    </Content>
  </Layout>
)

export default ProjectsPage
