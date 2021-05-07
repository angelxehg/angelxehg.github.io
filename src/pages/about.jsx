import React from "react"

import SEO from "@components/seo"
import { LinkExternal } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Icon } from "@components/icons"
import DefaultFooter from "@components/footer"
import DefaultNavbar from "@components/navbar"

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Acerca de mi" lang="es" />
      <DefaultNavbar />
      <div className="container-sm pt-3 pb-3">
        <header>
          <h1>Acerca de mi</h1>
          <p>{site.description}</p>
        </header>
        <section id="education">
          <h2>Educación</h2>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Ingeniería en Tecnologías de la Información y Comunicación
              </h4>
              <div className="card-text m-0 mb-1">
                <LinkExternal to="http://www.utzac.edu.mx" title="UTZAC">
                  <Icon name="Web" /> Universidad Tecnológica del Estado de
                  Zacatecas
                </LinkExternal>
              </div>
              <p className="card-text text-muted">
                Guadalupe, Zacatecas | 2017-2021
              </p>
            </div>
          </div>
        </section>
      </div>
      <DefaultFooter />
    </div>
  )
}

export default AboutPage
