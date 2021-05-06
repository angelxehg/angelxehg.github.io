import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "@components/seo"
import { LinkExternal } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Icon } from "@components/icons"
import DefaultFooter from "@components/footer"
import DefaultNavbar from "@components/navbar"
import { Card } from "react-bootstrap"

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Acerca de mi" lang="es" />
      <DefaultNavbar />
      <Container fluid="sm" className="pt-3 pb-3">
        <header>
          <h1>Acerca de mi</h1>
          <p>{site.description}</p>
        </header>
        <section id="education">
          <h2>Educación</h2>
          <Card>
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
        </section>
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default AboutPage
