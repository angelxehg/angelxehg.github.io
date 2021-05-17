import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import stacks from "../meta/stacks"
import { usePosts } from "../hooks/use-posts"
import { useProjects } from "../hooks/use-projects"
import { Link } from "gatsby"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="text-center mt-1">
      <ProfileImage />
      <header className="mt-2">
        <h1 className="h3">Angel Hurtado</h1>
        <p>{site.description}</p>
      </header>
      <nav className="d-lg-none">
        <a href="#about">Acerca de</a>, <a href="#skills">Habilidades</a>,{" "}
        <br className="d-sm-none d-block" />
        <Link to="/projects">Proyectos</Link>, <Link to="/posts">Blog</Link>
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
        {projects.map(item => {
          const { slug, title, excerpt, stack, github, demo } = item
          const stackIcons = stack.split(",")
          return (
            <div key={slug} className="col-xl-6 p-md-1 pb-2">
              <article className="card bg-dark">
                <div className="card-body">
                  <Link to={`/${slug}`}>
                    <h3 className="h5 card-title">{title}</h3>
                  </Link>
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
    </section>
  )
}

const PostsSection = () => {
  const posts = usePosts().slice(0, 3)
  return (
    <section id="posts">
      <h2 className="h4">
        Últimas <Link to="/posts">entradas</Link>:
      </h2>
      <div className="row">
        {posts.map(item => {
          const { slug, title, excerpt, date } = item
          return (
            <div key={slug} className="col-12 p-md-1 pb-2">
              <article className="card bg-dark">
                <div className="card-body">
                  <Link to={`/${slug}`}>
                    <h3 className="h5 card-title">{title}</h3>
                  </Link>
                  <h4 className="h6 card-subtitle mb-2">{date}</h4>
                  <p className="card-text m-0">{excerpt}</p>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const SkillsSection = () => (
  <section id="skills">
    <h2 className="h4">Habilidades:</h2>
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
    <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
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
