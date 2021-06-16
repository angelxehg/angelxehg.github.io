import React from "react"
import { Link } from "gatsby"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import { HugeHeader } from "../components/Header"
import DefaultFooter from "../components/Footer"
import { usePages } from "../hooks/use-pages"
import stacks from "../meta/stacks"
import { getLinkMeta } from "../meta/links"
import { ProjectCard } from "./projects"
import { LinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

const UTZACLink = () => (
  <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
    UTZAC
  </a>
)

const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi:</h2>
    <div>
      <div>
        <div>
          <div>
            <h3>Educación</h3>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@ <UTZACLink /> 2017-2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
      <h2>
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <Row>
        {projects.map(item => (
          <Col key={item.id} md="6" xl="4" className="p-md-1 pb-2">
            <ProjectCard item={item} titleAs="h3" />
          </Col>
        ))}
      </Row>
      <Link to="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const SkillCard = (props: { title: string; tools: LinkMeta[] }) => (
  <Card bg="dark" text="light">
    <Card.Body>
      <Card.Title as="h3" className="h5">
        {props.title}
      </Card.Title>
      <Card.Text>
        {props.tools.map(tool => (
          <Badge
            key={tool.name}
            pill
            bg="dark"
            text="light"
            className="mt-1 me-1"
          >
            <IconLink meta={tool} />
          </Badge>
        ))}
      </Card.Text>
    </Card.Body>
  </Card>
)

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <Row>
      {stacks.map(({ title, tools }, n) => (
        <Col key={n} md="6" lg="4" xl="3" className="p-md-1 pb-2">
          <SkillCard title={title} tools={tools} />
        </Col>
      ))}
    </Row>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <HugeHeader />
    <Container as="main" className="mt-3">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </Container>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
