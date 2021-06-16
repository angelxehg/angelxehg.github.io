import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"
import { getLinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

interface ProjectCardProps {
  item: Page
}

const ProjectCard = (
  props: ProjectCardProps & { titleAs?: "h2" | "h3" }
): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <article className="card bg-dark text-light">
      <GatsbyImage image={image} alt={caption} className="card-img-top" />
      <div className="card-body">
        {props.titleAs === "h2" && (
          <h2 className="card-title h5">
            <Link to={`/${slug}`}>{title}</Link>
          </h2>
        )}
        {props.titleAs === "h3" && (
          <h3 className="card-title h5">
            <Link to={`/${slug}`}>{title}</Link>
          </h3>
        )}
        <p className="card-text m-0">{resume}</p>
        <p className="card-text mt-1">
          Hecho con{": "}
          {stackIcons.map(toolName => {
            const link = getLinkMeta(toolName)
            return (
              <span
                key={toolName}
                className="badge rounded-pill bg-dark text-light mt-1 me-1"
              >
                <IconLink noUnderline meta={link} />
              </span>
            )
          })}
        </p>
      </div>
    </article>
  )
}

export const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
      <h2>
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <div className="row">
        {projects.map(item => (
          <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
            <ProjectCard item={item} titleAs="h3" />
          </div>
        ))}
      </div>
      <Link to="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <DefaultNavbar />
      <div className="bg-inter-background">
        <header className="container-xl ps-sm-4 pe-sm-4 pt-3 pb-1">
          <h1>Todos mis proyectos</h1>
          <p>Estos son todos mis proyectos públicos</p>
        </header>
      </div>
      <main className="container-xl ps-sm-4 pe-sm-4 pt-3 pb-3">
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </main>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
