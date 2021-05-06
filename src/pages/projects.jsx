import React from "react"
import Container from "react-bootstrap/Container"

import DefaultFooter from "@components/footer"
import SEO from "@components/seo"
import { Icon, LinkIcon } from "@components/icons"
import { LinkExternal } from "@components/social"
import DefaultNavbar from "@components/navbar"
import { Card, Col, Row } from "react-bootstrap"

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
      <Container fluid="md" className="pt-3 pb-3">
        <header>
          <h1>Proyectos</h1>
          <p>
            Estos son mis proyectos que he realizado por mi cuenta, y como
            proyectos escolares.
          </p>
        </header>
        <Row>
          {projects.map(item => {
            const { slug, title, extract, stack, github, demo } = item
            const stackIcons = stack.split(",")
            return (
              <Col key={slug} xl="4" md="6" className="p-1">
                <Card>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="m-0">{extract}</Card.Text>
                    <Card.Text className="text-muted">
                      Hecho con:{" "}
                      {stackIcons.map(icon => (
                        <LinkIcon key={icon} name={icon} />
                      ))}
                    </Card.Text>
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
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default ProjectsPage
