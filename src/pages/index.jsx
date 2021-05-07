import React from "react"

import DefaultFooter from "@components/footer"
import SEO from "@components/seo"
import { LinkExternal, ProfileImage, socialLinks } from "@components/social"
import { availableIcons, Icon, LinkIcon } from "@components/icons"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Col, Card, Container, Row } from "react-bootstrap"

const PageHeader = () => {
  const site = useSiteMetadata()
  return (
    <Row className="text-center text-sm-start">
      <Col sm="auto">
        <ProfileImage />
      </Col>
      <Col>
        <header className="m-sm-0 mt-2">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </header>
        <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
          <Icon name="Email" className="me-1" size="1.5rem" />
          sudo@angelxehg.com
        </LinkExternal>
        <br className="d-block d-sm-none" />
        {socialLinks.map(({ title, to, icon }) => (
          <LinkExternal key={to} to={to} title={title}>
            <Icon name={icon} size="1.5rem" />
          </LinkExternal>
        ))}
      </Col>
    </Row>
  )
}

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

const ProjectsSection = () => (
  <section id="projects">
    <h2>Proyectos</h2>
    <Row>
      {projects.map(item => {
        const { slug, title, extract, stack, github, demo } = item
        const stackIcons = stack.split(",")
        return (
          <Col key={slug} xl="4" md="6" className="p-md-1 pb-2">
            <Card className="bg-dark">
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
  </section>
)

const EducationSection = () => (
  <section id="education">
    <h2>Educación</h2>
    <Row>
      <Col xl="7" lg="8" className="p-md-1 pb-2">
        <Card className="bg-dark">
          <Card.Body>
            <Card.Title>
              Ingeniería en Tecnologías de la Información y Comunicación
            </Card.Title>
            <Card.Text className="m-0 mb-1">
              <LinkExternal to="http://www.utzac.edu.mx" title="UTZAC">
                <Icon name="Web" /> Universidad Tecnológica del Estado de Zacatecas
              </LinkExternal>
            </Card.Text>
            <Card.Text className="text-muted">
              Guadalupe, Zacatecas | 2017-2021
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </section>
)

const stacks = [
  {
    title: "Lenguajes",
    icons: ["HTML5", "CSS3", "Javascript", "Typescript", "Python", "Markdown"],
  },
  {
    title: "Frameworks y librerias",
    icons: ["React", "Ionic", "Gatsby", "Django", "Bootstrap", "Angular"],
  },
  {
    title: "Herramientas",
    icons: ["Ubuntu", "VSCode", "NodeJS", "NPM", "Git"],
  },
  {
    title: "Plataformas",
    icons: ["Netlify", "GitHub", "GitLab", "Firebase", "DigitalOcean"],
  },
]

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <Row>
      {stacks.map(({ title, icons }, n) => (
        <Col key={n} xl="4" md="6" className="p-md-1 pb-2">
          <Card className="bg-dark">
            <Card.Body>
              <Card.Title>
                {title}
              </Card.Title>
              <Card.Text>
                {icons.map(icon => {
                  if (availableIcons.find(i => i === icon)) {
                    return (
                      <LinkIcon key={icon} name={icon} size="1.5rem" />
                    )
                  } else {
                    console.log(icon)
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

const IndexPage = () => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <Container fluid="md" className="pt-4 pb-3">
      <PageHeader />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
    </Container>
    <DefaultFooter />
  </div>
)

export default IndexPage
