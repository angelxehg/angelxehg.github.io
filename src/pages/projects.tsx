import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { IContent, useContents } from "../hooks/use-contents"
import { EIcon, IconSelector } from "../components/icons"

const Project = (props: { project: IContent }) => {
  const { slug, title, extract, image, stack } = props.project;
  const icons = stack.split(',').filter(i => i in EIcon).map(i => i as EIcon)
  return (
    <Column>
      <div className="card no-bg">
        <GatsbyImage image={image} alt={title} />
        <div className="card-body">
          <Link to={"/" + slug}>
            <h2 className="card-title m-0">{title}</h2>
          </Link>
          {icons.map(icon => <IconSelector key={icon} icon={icon} className="me-1"/>)}
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
