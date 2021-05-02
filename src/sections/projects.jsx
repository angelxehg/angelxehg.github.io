import React from 'react';
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { Icon, LinkIcon } from "@components/icons"
import { LinkExternal } from "@components/social"

const projects = [
  {
    uuid: "playbooks",
    title: "Ansible Playbooks",
    resume: "Playbooks para configurar stacks",
    date: "2021-01-01",
    stack: "Ubuntu,Python",
    demo: null,
    github: "https://github.com/angelxehg/playbooks",
  },
  {
    uuid: "portafolio",
    title: "Portafolio",
    resume: "Mi página web principal",
    date: "2021-03-12",
    stack: "Gatsby,React,Javascript,Netlify",
    demo: "https://angelxehg.github.io/",
    github: "https://github.com/angelxehg/angelxehg.github.io",
  },
  {
    uuid: "react-capacitor-examples",
    title: "React Capacitor",
    resume: "Ejemplos de uso de Capacitor con React",
    date: "2021-03-30",
    stack: "React,Android,GitHub",
    demo: "https://react-capacitor-examples.netlify.app/",
    github: "https://github.com/angelxehg/react-examples",
  },
  {
    uuid: "react-examples",
    title: "React Examples",
    resume: "Ejemplos de React, en GitHub Pages",
    date: "2021-03-01",
    stack: "React,GitHub",
    demo: "https://angelxehg.github.io/react-examples",
    github: "https://github.com/angelxehg/react-examples",
  },
  {
    uuid: "tomatoe-chat",
    title: "Tomatoe Chat",
    resume: "Aplicación de chat con Ionic y Firebase",
    date: "2020-08-01",
    stack: "Ionic,Android,Angular,Javascript,Typescript,Firebase",
    demo: null,
    github: "https://github.com/angelxehg/tomatoe-chat",
  },
  {
    uuid: "xpress-library",
    title: "Xpress Library",
    resume: "Aplicación de Libros y Autores",
    date: "2020-12-01",
    stack: "Gatsby,React,Javascript,Netlify",
    demo: null,
    github: "https://github.com/angelxehg/xpress-library",
  },
];

const ProjectsSection = () => (
  <section id="projects">
    <h2>Proyectos</h2>
    <Row>
      {projects.map(project => {
        const { uuid, title, resume, demo, github, stack } = project;
        const stackIcons = stack.split(",")
        return (
          <Col key={uuid} xl="4" md="6" className="p-1">
            <Card border="secondary">
              <Card.Body>
                <Card.Title>
                  {title}
                  {github && (
                    <LinkExternal to={github} title="Repositorio">
                      <Icon name="GitHub" />
                    </LinkExternal>
                  )}
                  {demo && (
                    <LinkExternal to={demo} title="Demo">
                      <Icon name="Web" />
                    </LinkExternal>
                  )}
                  {stackIcons.map(icon => (
                    <LinkIcon key={icon} name={icon} />
                  ))}
                </Card.Title>
                <Card.Text>{resume}</Card.Text>
                {demo && <Card.Link href={demo}>Demo</Card.Link>}
                {github && <Card.Link href={github}>Código</Card.Link>}
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  </section>
)

export default ProjectsSection
