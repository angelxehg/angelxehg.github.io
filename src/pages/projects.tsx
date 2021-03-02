import React from "react"
import { Column, Grid } from "../components/grid";

import Layout, { Header } from "../components/layout"
import SEO from "../components/seo"

interface ProjectInterface {
  title: string
  extract: string
}

const projects: ProjectInterface[] = [];
for (let i = 1; i < 10; i++) {
  projects.push({
    title: `Proyecto ${i}`,
    extract: `Este es el proyecto ${i}, el cual es un ejemplo`,
  })
}

const Project = (props: { project: ProjectInterface }) => {
  return (
    <Column>
      <div className="card no-bg">
        <div className="card-body">
          <h2 className="card-title">{props.project.title}</h2>
          <p className="card-text">{props.project.extract}</p>
        </div>
      </div>
    </Column>
  )
}

const ProjectsPage = () => (
  <Layout>
    <SEO title="Proyectos" />
    <Header title="Proyectos" description="Estos son mis proyectos"/>
    <Grid>
      {projects.map((item, index) => <Project key={index} project={item} />)}
    </Grid>
  </Layout>
)

export default ProjectsPage
