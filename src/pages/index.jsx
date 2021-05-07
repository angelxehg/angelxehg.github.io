import React from "react"
import { Link } from "gatsby"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon, LinkIcon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import projects from "../meta/projects"
import stacks from "../meta/stacks"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="row text-center text-sm-start">
      <div className="col-sm-auto">
        <ProfileImage />
      </div>
      <div className="col">
        <header className="m-sm-0 mt-2">
          <Link to="/">
            <h1 className="h3">{site.title}</h1>
          </Link>
          <p>{site.description}</p>
        </header>
        <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
          <Icon name="Email" className="me-1" size="1.5rem" />
          sudo@angelxehg.com
        </LinkExternal>
        <br className="d-block d-sm-none" />
        {socialLinks.map(({ title, to, icon }) => (
          <LinkExternal key={to} to={to} title={title}>
            <Icon name={icon} size="1.5rem" />
          </LinkExternal>
        ))}
      </div>
    </div>
  )
}

const ProjectsSection = () => (
  <section id="projects" className="mt-3">
    <h2 className="h4">Proyectos</h2>
    <div className="row">
      {projects.map(item => {
        const { slug, title, extract, stack, github, demo } = item
        const stackIcons = stack.split(",")
        return (
          <div key={slug} className="col-xl-6 col-lg-12 col-md-6 p-md-1 pb-2">
            <div className="card bg-dark">
              <div className="card-body">
                <h3 className="h5 card-title">{title}</h3>
                <p className="card-text m-0">{extract}</p>
                <p className="card-text">
                  Hecho con:{" "}
                  {stackIcons.map(icon => (
                    <LinkIcon key={icon} name={icon} />
                  ))}
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
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

const EducationSection = () => (
  <section id="education" className="mt-3">
    <h2 className="h4">Educación</h2>
    <div className="row">
      <div className="col p-md-1 pb-2">
        <div className="card bg-dark">
          <div className="card-body">
            <h3 className="h5 card-title">
              Ingeniería en Tecnologías de la Información y Comunicación
            </h3>
            <p className="card-text m-0 mb-1">
              <LinkExternal to="http://www.utzac.edu.mx" title="UTZAC">
                <Icon name="Web" /> Universidad Tecnológica del Estado de
                Zacatecas
              </LinkExternal>
            </p>
            <p className="card-text">Guadalupe, Zacatecas | 2017-2021</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const SkillsSection = () => (
  <section id="skills" className="mt-3">
    <h2 className="h4">Habilidades</h2>
    <div className="row">
      {stacks.map(({ title, icons }, n) => (
        <div key={n} className="col-md-6 p-md-1 pb-2">
          <div className="card bg-dark">
            <div className="card-body">
              <h3 className="h5 card-title">{title}</h3>
              <p className="card-text">
                {icons.map(icon => {
                  if (availableIcons.find(i => i === icon)) {
                    return <LinkIcon key={icon} name={icon} size="1.5rem" />
                  } else {
                    console.log(icon)
                  }
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const IndexPage = () => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <div className="container-md pt-4 pb-3">
      <PageHeader />
      <div className="row">
        <div className="col-lg-4 order-lg-last">
          <EducationSection />
        </div>
        <div className="col-lg">
          <SkillsSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
    <DefaultFooter />
  </div>
)

export default IndexPage
