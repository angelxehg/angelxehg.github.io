import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon } from "../components/icons"
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
          <h1 className="h3">{site.title}</h1>
          <p>{site.description}</p>
        </header>
      </div>
    </div>
  )
}

const ContactSection = () => (
  <section id="contact" className="mt-3">
    <h2 className="h4">Acerca de</h2>
    <div className="row">
      <div className="col p-md-1 pb-2">
        <div className="card bg-dark">
          <div className="card-body">
            <h3 className="h5 card-title">Contacto</h3>
            <ul className="p-0" style={{ listStyleType: 'none' }}>
              <li>
                <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
                  <Icon name="Email" className="me-2" size="1.5rem" />
                  sudo@angelxehg.com
                </LinkExternal>
              </li>
              {socialLinks.map(({ title, to, icon }) => {
                return (
                  <li key={to} className="mt-1" style={{ listStyle: 'none' }}>
                    <LinkExternal to={to} title={title}>
                      <Icon name={icon} className="me-2" size="1.5rem" />
                      {title}
                    </LinkExternal>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

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
                  {stackIcons.map(icon => {
                    return (
                      <span key={icon} className="badge rounded-pill bg-dark mt-1 me-1">
                        <Icon name={icon} /> { icon}
                      </span >
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
            </div>
          </div>
        )
      })}
    </div>
  </section >
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
                    return (
                      <span key={icon} className="badge rounded-pill bg-dark mt-1 me-1">
                        <Icon key={icon} name={icon} /> { icon}
                      </span >
                    )
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
        <div className="col-lg-4">
          <ContactSection />
          <EducationSection />
        </div>
        <div className="col-lg">
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </div>
    <DefaultFooter />
  </div>
)

export default IndexPage
