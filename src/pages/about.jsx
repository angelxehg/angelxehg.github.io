import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SEO from "@components/seo"
import { ProfileImage, LinkExternal, socialLinks } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { LinkIcon, Icon } from "@components/icons"
import Footer from "@components/footer"

const ComplexHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="no-bg divr">
      <div>
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
            <Link to="/" style={{ color: "white" }}>
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
                <LinkExternal to="mailto:contact@angelxehg.com" title="Email">
                  <Icon name="Email" className="me-1" />
                  contact@angelxehg.com
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

const AboutPage = () => {
  const site = useSiteMetadata()
  const stacks = [
    {
      title: "Lenguajes",
      icons: ["HTML5", "CSS3", "Typescript", "Javascript", "Python"],
    },
    {
      title: "Frameworks",
      icons: ["React", "Ionic", "Gatsby", "Angular"],
    },
    {
      title: "Herramientas",
      icons: ["NodeJS", "NPM", "Git", "Markdown", "Bootstrap"],
    },
    {
      title: "Plataformas",
      icons: ["Ubuntu", "Netlify", "AWS", "Firebase", "DigitalOcean"],
    },
  ]
  return (
    <Container fluid="sm" className="mt-3 mb-3 text-white font-monospace">
      <SEO title="Acerca de mi" lang="es" />
      <ComplexHeader />
      <Container fluid={true} className="pt-3 pb-3">
        <header className="d-block d-md-none">
          <h3>Acerca de mi</h3>
          <p>{site.description}</p>
        </header>
        <main>
          <FlexibleInfo title="Educación">
            <p>
              <b>Ingeniería en Tecnologías de la Información y Comunicación</b>
              <br />
              <LinkExternal to="http://www.utzac.edu.mx">
                Universidad Tecnológica del Estado de Zacatecas
            </LinkExternal>
              <br />
            Guadalupe, Zacatecas | 2017-2021
          </p>
          </FlexibleInfo>
          <FlexibleInfo title="Habilidades">
            {stacks.map(({ title, icons }) => (
              <p key={title} className="m-0">
                {title + ": "}
                {icons.map(icon => (
                  <LinkIcon key={icon} name={icon} />
                ))}
              </p>
            ))}
            <br />
          </FlexibleInfo>
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
      <Footer />
    </Container>
  )
}

export default AboutPage
