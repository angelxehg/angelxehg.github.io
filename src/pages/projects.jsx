import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import DefaultFooter from "../components/footer"
import { LinkExternal } from "../components/social"
import { Icon } from "../components/icons"
import SEO from "../components/seo"
import { useProjects } from "../hooks/use-projects"
import DefaultNavbar from "../components/navbar"

const ProjectsPage = () => {
  const projects = useProjects()
  return (
    <div>
      <SEO title="Blog" lang="es" />
      <DefaultNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mis proyectos</h1>
        <p>
          Estos son todos mis proyectos públicos
        </p>
        <h2 className="h4">Últimos proyectos</h2>
        <div className="row">
          {projects.map(item => {
            const { slug, title, excerpt, date, image, caption, stack, github, demo } = item
            const stackIcons = stack.split(",")
            return (
              <div key={slug} className="col-xl-4 col-md-6 p-md-1 pb-2">
                <article className="card bg-dark">
                  <GatsbyImage
                    className="card-img-top img-200"
                    image={image}
                    alt={caption}
                  />
                  <div className="card-body">
                    <Link to={`/${slug}`}>
                      <h3 className="h5 card-title">{title}</h3>
                    </Link>
                    <h4 className="h6 card-subtitle mb-2">{date}</h4>
                    <p className="card-text m-0">{excerpt}</p>
                    <p className="card-text">
                      {stackIcons.map(icon => {
                        return (
                          <span
                            key={icon}
                            className="badge rounded-pill bg-dark mt-1 me-1"
                          >
                            <Icon name={icon} /> {icon}
                          </span>
                        )
                      })}
                    </p>
                    {github && (
                      <LinkExternal to={github} title="Repositorio">
                        <Icon name="GitHub" /> Repositorio
                      </LinkExternal>
                    )}
                    {demo && (
                      <LinkExternal to={demo} title="Demo">
                        <Icon name="Web" /> Demo
                      </LinkExternal>
                    )}
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage
