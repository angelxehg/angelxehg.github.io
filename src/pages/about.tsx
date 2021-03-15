import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { ProfileImage, LinkExternal } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Icons, Icon } from "../components/icons"
import Layout, { Footer, LayoutContent } from "../components/layout"

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
                <Link to="/posts" className="me-3">
                  Blog
                </Link>
                <Link to="/projects">
                  Proyectos
                </Link>
              </div>
              <div className="col-lg-auto mt-2 mt-lg-0 text-lg-end text-center">
                <LinkExternal to="mailto:contact@angelxehg.com" title="Email">
                  <Icon name={Icons.Email} className="me-1" />
                  contact@angelxehg.com
                </LinkExternal>
                <br className="d-block d-sm-none" />
                <LinkExternal
                  to="https://www.linkedin.com/in/angelxehg"
                  title="LinkedIn (/in/angelxehg)"
                >
                  <Icon name={Icons.LinkedIn} />
                </LinkExternal>
                <LinkExternal
                  to="https://www.paypal.me/angelxehg"
                  title="PayPal (@angelxehg)"
                >
                  <Icon name={Icons.PayPal} />
                </LinkExternal>
                <LinkExternal
                  to="https://github.com/angelxehg"
                  title="GitHub (@angelxehg)"
                >
                  <Icon name={Icons.GitHub} />
                </LinkExternal>
                <LinkExternal
                  to="https://gitlab.com/angelxehg"
                  title="GitLab (@angelxehg)"
                >
                  <Icon name={Icons.GitLab} />
                </LinkExternal>
                <LinkExternal
                  to="https://www.twitter.com/angelxehg"
                  title="Twitter (@angelxehg)"
                >
                  <Icon name={Icons.Twitter} />
                </LinkExternal>
                <LinkExternal
                  to="https://www.instagram.com/angelxehg"
                  title="Instagram (@angelxehg)"
                >
                  <Icon name={Icons.Instagram} />
                </LinkExternal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FlexibleInfo = (props: { title: string; children: any }) => {
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
  children: PropTypes.node.isRequired,
}

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <Layout>
      <SEO title="Mi trayectoria" lang="es"/>
      <ComplexHeader />
      <LayoutContent>
        <div className="d-block d-md-none">
          <h3>Acerca de mi</h3>
          <p>{site.description}</p>
        </div>
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
          <p>
            Lenguajes:
            <Icon name={Icons.HTML5} className="ms-1 me-1" />
            <Icon name={Icons.CSS3} className="me-1" />
            <Icon name={Icons.Typescript} className="me-1" />
            <Icon name={Icons.Javascript} className="me-1" />
            <Icon name={Icons.Python} className="me-1" />
            <br />
            Frameworks:
            <Icon name={Icons.React} className="ms-1 me-1" />
            <Icon name={Icons.Ionic} className="me-1" />
            <Icon name={Icons.Gatsby} className="me-1" />
            <Icon name={Icons.Angular} className="me-1" />
            <br />
            Herramientas:
            <Icon name={Icons.NodeJS} className=" ms-1 me-1" />
            <Icon name={Icons.NPM} className="me-1" />
            <Icon name={Icons.Git} className="me-1" />
            <Icon name={Icons.Markdown} className="me-1" />
            <Icon name={Icons.Bootstrap} className="me-1" />
            <br />
            Plataformas:
            <Icon name={Icons.Ubuntu} className="ms-1 me-1" />
            <Icon name={Icons.Netlify} className="me-1" />
            <Icon name={Icons.AWS} className="me-1" />
            <Icon name={Icons.Firebase} className="me-1" />
            <Icon name={Icons.DigitalOcean} className="me-1" />
          </p>
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
      </LayoutContent>
      <Footer />
    </Layout>
  )
}

export default AboutPage
