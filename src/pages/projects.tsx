import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import DefaultFooter from "../components/footer"
import { Icon } from "../components/icons"
import SEO from "../components/seo"
import { useProjects } from "../hooks/use-projects"
import DefaultNavbar from "../components/navbar"
import { Project } from "../meta/models"

export const ProjectCard = (props: {
  item: Project
  noImage?: boolean
}): JSX.Element => {
  const { slug, title, excerpt, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <article className="card bg-dark">
      {!props.noImage && (
        <GatsbyImage
          className="card-img-top img-200"
          image={image}
          alt={caption}
        />
      )}
      <div className="card-body">
        <Link to={`/${slug}`}>
          <h3 className="h5 card-title">{title}</h3>
        </Link>
        <p className="card-text m-0">{excerpt}</p>
        <p className="card-text">
          {stackIcons.map(icon => {
            return (
              <span key={icon} className="badge rounded-pill bg-dark mt-1 me-1">
                <Icon name={icon} /> {icon}
              </span>
            )
          })}
        </p>
      </div>
    </article>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = useProjects()
  return (
    <div>
      <SEO title="Blog" lang="es" />
      <DefaultNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mis proyectos</h1>
        <p>Estos son todos mis proyectos públicos</p>
        <h2 className="h4">Últimos proyectos</h2>
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-xl-4 col-md-6 p-md-1 pb-2">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage