import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"
import DefaultNavbar from "../components/Navbar"

interface ProjectCardProps {
  item: Page
}

const ProjectCard = (
  props: ProjectCardProps & { titleAs: "h2" | "h3" },
): JSX.Element => {
  const { slug, title, image, caption, stack } = props.item
  return (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <article className="card" style={{ height: "100%" }}>
        <GatsbyImage image={image} alt={caption} className="card-img-top" />
        <div className="card-body">
          {props.titleAs === "h2" && <h2 className="card-title h5">{title}</h2>}
          {props.titleAs === "h3" && <h3 className="card-title h5">{title}</h3>}
          <p className="card-text m-0">{caption}</p>
          <p className="card-text m-0">
            {stack.map(toolName => (
              <span key={toolName} className="badge rounded-pill mt-1 me-1">
                {toolName}
              </span>
            ))}
          </p>
        </div>
      </article>
    </Link>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <div className="hero">
        <div className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-3">
          <Link to="/">{"< "}Volver a Portafolio</Link>
          <header className="mt-1">
            <h1>Todos mis proyectos</h1>
            <p className="m-0">Estos son todos mis proyectos públicos</p>
          </header>
        </div>
      </div>
      <main className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-3">
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-lg-6 p-sm-1 pb-3">
              <ProjectCard titleAs="h2" item={item} />
            </div>
          ))}
        </div>
      </main>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
