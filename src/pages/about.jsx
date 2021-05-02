import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"

import CenterLayout from "@layouts/center"
import SEO from "@components/seo"
import { ProfileImage, LinkExternal, socialLinks } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { Icon } from "@components/icons"
import DefaultFooter from "@components/footer"

const ComplexHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="row pt-3 pb-3 pe-1 ps-1">
      <div className="col-md-auto">
        <div className="row">
          <div className="col d-block d-md-none"></div>
          <div className="col-auto">
            <ProfileImage />
          </div>
          <div className="col d-block d-md-none"></div>
        </div>
      </div>
      <div className="col text-center text-md-start mt-3 mt-md-0">
        <Link to="/" style={{ color: "black" }}>
          <h1>{site.title}</h1>
        </Link>
        <p className="d-none d-md-block">{site.description}</p>
        <div className="row mt-2">
          <div className="col-lg text-lg-start text-center">
            <Link to="/" className="me-3">
              Resumen
                </Link>
            {/* <LinkExternal to="https://blog.angelxehg.com/" className="me-3">
                  Blog
                </LinkExternal> */}
            <Link to="/projects">Proyectos</Link>
          </div>
          <div className="col-lg-auto mt-2 mt-lg-0 text-lg-end text-center">
            <LinkExternal to="mailto:sudo@angelxehg.com" title="Email">
              <Icon name="Email" className="me-1" />
                  sudo@angelxehg.com
                </LinkExternal>
            <br className="d-block d-sm-none" />
            {socialLinks.map(({ title, to, icon }) => (
              <LinkExternal key={to} to={to} title={title}>
                <Icon name={icon} />
              </LinkExternal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FlexibleInfo = props => {
  return (
    <div className="row">
      <div className="col-xl-2 col-lg-3 col-md-4">
        <h4>{props.title}</h4>
      </div>
      <div className="col">{props.children}</div>
    </div>
  )
}

FlexibleInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const AboutPageOld = () => {
  return (
    <Container fluid="sm" className="mt-3 mb-3">
      <SEO title="Acerca de mi" lang="es" />
      <ComplexHeader />
      <Container fluid={true} className="pt-3 pb-3">
        <main>
          <FlexibleInfo title="Aptitudes">
            <p>
              Aprendizaje autónomo
            <br />
            Orientado a objetivos
            <br />
            Resolución de problemas
            <br />
            DevOps, CI y CD
            <br />
            SCRUM y Kanban
          </p>
          </FlexibleInfo>
          <FlexibleInfo title="Premios">
            <p>
              1° Zacatecas: Concurso Nacional de Prototipos 2016
            <br />
            19° Nacional: Concurso Nacional de Prototipos 2016
          </p>
          </FlexibleInfo>
        </main>
      </Container>
      <DefaultFooter />
    </Container>
  )
}

const AboutPage = () => {
  navigate('/')
  return (
    <CenterLayout>
      <SEO title="Redireccionando" lang="es" />
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Redireccionando...</h1>
          <p className="card-text m-0">Espere un momento</p>
        </div>
      </div>
    </CenterLayout>
  )
}

export default AboutPage
