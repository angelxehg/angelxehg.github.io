import React from "react"
import { Link } from "gatsby"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { availableIcons, Icon } from "../components/icons"
import stacks from "../meta/stacks"
import { usePages } from "../hooks/use-pages"
import {ProjectCard} from "./projects"

const AboutSection = () => (
  <section id="about" className="mt-2">
    <h2 className="h4">Acerca de mi:</h2>
    <Row>
      <Col xs="12" className="p-md-1 pb-2">
        <Card bg="dark" text="light">
          <Card.Body>
            <Card.Title>Educación</Card.Title>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@
                <a href="http://www.utzac.edu.mx" rel="noopener" target="_blank" title="UTZAC">
                  UTZAC
                </a>{" "}
                2017-2021
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="12" className="p-md-1 pb-2">
        <Card bg="dark" text="light">
          <Card.Body>
            <Card.Title>Enlaces</Card.Title>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <a href="mailto:sudo@angelxehg.com" title="Email" rel="noopener" target="_blank">
                  <Icon name="Email" className="me-2" />
                  sudo@angelxehg.com
                </a>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </section>
)

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects" className="mt-2">
      <h2 className="h4">
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <Row>
        {projects.map(item => (
          <Col key={item.id} xs="12" className="p-md-1 pb-2">
            <ProjectCard item={item} noImage />
          </Col>
        ))}
      </Row>
      <Link to="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const SkillsSection = () => (
  <section id="skills" className="mt-2">
    <h2 className="h4">Habilidades:</h2>
    <Row>
      {stacks.map(({ title, icons }, n) => (
        <Col key={n} xs="12" className="p-md-1 pb-2">
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {icons.map(icon => {
                  if (availableIcons.find(i => i === icon)) {
                    return (
                      <Badge
                        key={icon}
                        pill
                        bg="dark"
                        text="light"
                        className="mt-1 me-1"
                      >
                        <Icon name={icon} /> {icon}
                      </Badge>
                    )
                  }
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
)

const IndexPage = (): JSX.Element => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <Container fluid="xl" className="ps-md-4 pe-md-4 pt-3 pb-3">
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </Container>
    <DefaultFooter />
  </div>
)

export default IndexPage
