import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"
import DefaultNavbar from "../components/Navbar"
import { CreateBadge } from "../components/Link"

interface ProjectCardProps {
  item: Page
}

const ProjectCard = (
  props: ProjectCardProps & { titleAs: "h2" | "h3" }
): JSX.Element => {
  const { slug, title, image, caption, stack } = props.item
  return (
    <article className="card" style={{ height: "100%" }}>
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
        <p className="card-text m-0">{caption}</p>
        <p className="card-text m-0">
          {stack.map(toolName => (
            <CreateBadge key={toolName} from={toolName} />
          ))}
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
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <div className="hero">
        <header className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-2">
          <h1>Todos mis proyectos</h1>
          <p>Estos son todos mis proyectos públicos</p>
          <Link to="/">{"< "}Volver a Portafolio</Link>
        </header>
      </div>
      <main className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-3">
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
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
