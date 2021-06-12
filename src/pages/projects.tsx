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
  const { slug, title, resume, date, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <article className="card">
      <div className="row">
        {!props.noImage && (
          <div className="col-xl-3 col-md-4">
            <GatsbyImage
              className="card-img-top img-200"
              image={image}
              alt={caption}
            />
          </div>
        )}
        <div className="col-md">
          <div className="card-body">
            <Link to={`/${slug}`}>
              <h3 className="h5 card-title">{title}</h3>
            </Link>
            <h4 className="h6 card-subtitle mb-2">{date}</h4>
            <p className="card-text m-0">{resume}</p>
            <p className="card-text mt-1">
              {stackIcons.map(icon => {
                return (
                  <span
                    key={icon}
                    className="badge bg-light text-dark rounded-pill mt-1 me-1"
                  >
                    <Icon name={icon} /> {icon}
                  </span>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = useProjects()
  return (
    <div>
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mis proyectos</h1>
        <p>Estos son todos mis proyectos públicos</p>
        <h2 className="h4">Últimos proyectos</h2>
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-12 p-md-1 pb-2">
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
