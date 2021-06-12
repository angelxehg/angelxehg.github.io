import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "../components/social"
import { availableIcons, Icon } from "../components/icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import stacks from "../meta/stacks"
import { usePages } from "../hooks/use-pages"
import ProjectCard from "../components/project"

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
        <Link to="/projects">Proyectos</Link>,{" "}
        <LinkExternal to="https://dev.to/angelxehg.com">Blog</LinkExternal>
      </nav>
    </div>
  )
}

const AboutSection = () => (
  <section id="about">
    <Row>
      <Col xs="12" className="p-md-1 pb-2">
        <div className="card">
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
      </Col>
      <Col xs="12" className="p-md-1 pb-2">
        <div className="card">
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
      </Col>
    </Row>
  </section>
)

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
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
  <section id="skills">
    <h2 className="h4">Habilidades:</h2>
    <Row>
      {stacks.map(({ title, icons }, n) => (
        <Col key={n} xs="12" className="p-md-1 pb-2">
          <div className="card">
            <div className="card-body">
              <h3 className="h5 card-title">{title}</h3>
              <p className="card-text">
                {icons.map(icon => {
                  if (availableIcons.find(i => i === icon)) {
                    return (
                      <span
                        key={icon}
                        className="badge rounded-pill bg-light text-dark mt-1 me-1"
                      >
                        <Icon key={icon} name={icon} /> {icon}
                      </span>
                    )
                  }
                })}
              </p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </section>
)

const IndexPage = (): JSX.Element => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <Container fluid="xl" className="ps-md-4 pe-md-4 pt-3 pb-3">
      <Row>
        <Col lg="4">
          <PageHeader />
          <AboutSection />
        </Col>
        <Col lg="8">
          <ProjectsSection />
          <SkillsSection />
        </Col>
      </Row>
    </Container>
    <DefaultFooter />
  </div>
)

export default IndexPage
