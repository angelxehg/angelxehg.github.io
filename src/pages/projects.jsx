import React from "react"

import DefaultFooter from "@components/footer"
import SEO from "@components/seo"
import { Icon, LinkIcon } from "@components/icons"
import { LinkExternal } from "@components/social"
import DefaultNavbar from "@components/navbar"

const projects = [
  {
    slug: "portafolio",
    title: "Portafolio profesional",
    extract: "Mi sitio web y portafolio profesional",
    stack: "Gatsby,React,Javascript,GitHub",
    github: "https://github.com/angelxehg/angelxehg.github.io",
    demo: "https://angelxehg.github.io/",
  },
  {
    slug: "react-capacitor",
    title: "React + Capacitor",
    extract: "Ejemplo de aplicación hibrida sin Ionic",
    stack: "React,Android,GitHub",
    github: "https://github.com/angelxehg/react-examples",
    demo: "https://react-capacitor-examples.netlify.app/",
  },
  {
    slug: "tomatoe-chat",
    title: "Tomatoe Chat",
    extract: "Aplicación móvil de chat",
    stack: "Ionic,Android,Angular,Javascript,Typescript,Firebase",
    github: "https://github.com/angelxehg/tomatoe-chat",
  },
  {
    slug: "xpress-library",
    title: "Xpress Library",
    extract: "Administración de una biblioteca",
    stack: "Angular,Bootstrap,Javascript,Typescript,NodeJS",
    github: "https://github.com/angelxehg/xpress-library",
  },
]

const ProjectsPage = () => {
  return (
    <div>
      <SEO title="Proyectos" lang="es" />
      <DefaultNavbar />
      <div className="container-md pt-3 pb-3">
        <header>
          <h1>Proyectos</h1>
          <p>
            Estos son mis proyectos que he realizado por mi cuenta, y como
            proyectos escolares.
          </p>
        </header>
        <div className="row">
          {projects.map(item => {
            const { slug, title, extract, stack, github, demo } = item
            const stackIcons = stack.split(",")
            return (
              <div key={slug} className="col-xl-4 col-md-6 p-1">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text m-0">{extract}</p>
                    <p className="card-text text-muted">
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
      </div>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage
