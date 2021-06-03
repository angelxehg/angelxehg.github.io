import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import stacks from "../meta/stacks"
import { useProjects } from "../hooks/use-projects"
import { Link } from "gatsby"
import { ProjectCard } from "./projects"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="text-center mt-1">
      <ProfileImage />
      <header className="mt-2">
        <h1 className="h3">Angel Hurtado</h1>
        <p>{site.description}</p>
      </header>
      <nav>
        <a href="#about">Acerca de</a>, <a href="#skills">Habilidades</a>,{" "}
        <br className="d-sm-none d-block" />
        <Link to="/projects">Proyectos</Link>, <LinkExternal to="https://dev.to/angelxehg.com">Blog</LinkExternal>
      </nav>
    </div>
  )
}

const AboutSection = () => (
  <section id="about">
    <div className="row">
      <div className="col-12 p-md-1 pb-2">
        <div className="card bg-dark">
          <div className="card-body">
            <h2 className="h5 card-title">Educación</h2>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@
                <LinkExternal to="http://www.utzac.edu.mx" title="UTZAC">
                  UTZAC
                </LinkExternal>{" "}
                2017-2021
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 p-md-1 pb-2">
        <div className="card bg-dark">
          <div className="card-body">
            <h2 className="h5 card-title">Enlaces</h2>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
                  <Icon name="Email" className="me-2" />
                  sudo@angelxehg.com
                </LinkExternal>
              </li>
              {socialLinks.map(({ title, to, icon }) => {
                return (
                  <li key={to} className="mt-1">
                    <LinkExternal to={to} title={title}>
                      <Icon name={icon} className="me-2" />
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

const ProjectsSection = () => {
  const projects = useProjects().slice(0, 2)
  return (
    <section id="projects">
      <h2 className="h4">
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <div className="row">
        {projects.map(item => (
          <div key={item.id} className="col-12 p-md-1 pb-2">
            <ProjectCard item={item} noImage />
          </div>
        ))}
        <Link to="/projects">Ver todos los proyectos {">"}</Link>
      </div>
    </section>
  )
}

const SkillsSection = () => (
  <section id="skills">
    <h2 className="h4">Habilidades:</h2>
    <div className="row">
      {stacks.map(({ title, icons }, n) => (
        <div key={n} className="col-12 p-md-1 pb-2">
          <div className="card bg-dark">
            <div className="card-body">
              <h3 className="h5 card-title">{title}</h3>
              <p className="card-text">
                {icons.map(icon => {
                  if (availableIcons.find(i => i === icon)) {
                    return (
                      <span
                        key={icon}
                        className="badge rounded-pill bg-dark mt-1 me-1"
                      >
                        <Icon key={icon} name={icon} /> {icon}
                      </span>
                    )
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

const IndexPage = (): JSX.Element => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
      <div className="row">
        <div className="col-lg-4">
          <PageHeader />
          <AboutSection />
        </div>
        <div className="col-lg-8">
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </div>
    <DefaultFooter />
  </div>
)

export default IndexPage
