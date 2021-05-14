import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import projects from "../meta/projects"
import stacks from "../meta/stacks"
import { usePosts } from "../hooks/use-posts"
import { Link } from "gatsby"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="text-center mt-1">
      <ProfileImage />
      <header className="mt-2">
        <h1 className="h3">{site.title}</h1>
        <p>{site.description}</p>
      </header>
      <nav className="d-md-none">
        <a href="#about">Acerca de</a>, <a href="#skills">Habilidades</a>,{" "}
        <a href="#projects">Proyectos</a>
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

const ProjectsSection = () => (
  <section id="projects">
    <h2 className="h4">Proyectos:</h2>
    <div className="row">
      {projects.map(item => {
        const { slug, title, extract, stack, github, demo } = item
        const stackIcons = stack.split(",")
        return (
          <div key={slug} className="col-xl-6 p-md-1 pb-2">
            <div className="card bg-dark">
              <div className="card-body">
                <h3 className="h5 card-title">{title}</h3>
                <p className="card-text m-0">{extract}</p>
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
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

const PostsSection = () => {
  const posts = usePosts();
  return (
    <section id="posts">
      <h2 className="h4">Blog:</h2>
      <div className="row">
        {posts.map(item => {
          const { slug, title, excerpt } = item
          return (
            <div key={slug} className="col-xl-6 p-md-1 pb-2">
              <div className="card bg-dark">
                <div className="card-body">
                  <Link to={slug}>
                    <h3 className="h5 card-title">{title}</h3>
                  </Link>
                  <p className="card-text m-0">{excerpt}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const SkillsSection = () => (
  <section id="skills">
    <h2 className="h4">Habilidades</h2>
    <div className="row">
      {stacks.map(({ title, icons }, n) => (
        <div key={n} className="col-lg-6 p-md-1 pb-2">
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

const IndexPage = () => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <div className="container-lg p-md-4 pt-4 pb-3">
      <div className="row">
        <div className="col-lg-4">
          <PageHeader />
          <AboutSection />
        </div>
        <div className="col-lg-8">
          <PostsSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </div>
    <DefaultFooter />
  </div>
)

export default IndexPage
