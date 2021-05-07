import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "@components/seo"
import { LinkExternal } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { LinkIcon, Icon, availableIcons } from "@components/icons"
import DefaultFooter from "@components/footer"
import DefaultNavbar from "@components/navbar"
import { Card, Col, Row } from "react-bootstrap"

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

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Acerca de mi" lang="es" />
      <DefaultNavbar />
      <Container fluid="md" className="pt-3 pb-3">
        <header>
          <h1>Acerca de mi</h1>
          <p>{site.description}</p>
        </header>
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
                      <Icon name="Web" /> Universidad Tecnológica del Estado de
                      Zacatecas
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
        <section id="skills" className="mt-3">
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
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default AboutPage
