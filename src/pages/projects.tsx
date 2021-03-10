import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { IContent, useContents } from "../hooks/use-contents"

const Project = (props: { project: IContent }) => {
  const { slug, title, extract, image } = props.project;
  return (
    <Column>
      <div className="card bg-dark">
        <GatsbyImage image={image} alt={title} />
        <div className="card-body">
          <Link to={"/" + slug}>
            <h2 className="card-title">{title}</h2>
          </Link>
          <p className="card-text">{extract}</p>
        </div>
      </div>
    </Column>
  )
}

const ProjectsPage = () => {
  const projects = useContents("project");
  return (
    <Layout>
      <SEO title="Proyectos" />
      <Grid>
        {projects.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </Grid>
    </Layout>
  )
}

export default ProjectsPage
