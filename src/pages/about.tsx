import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { ProfileImage, LinkEmailLabel, LinkLinkedIn, LinkPaypal, LinkGitHub, LinkGitLab, LinkTwitter, LinkInstagram } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const AngularIcon = require("../assets/fontawesome/angular-brands.svg")
const BootstrapIcon = require("../assets/fontawesome/bootstrap-brands.svg")
const CSS3Icon = require("../assets/fontawesome/css3-alt-brands.svg")
const DigitalOceanIcon = require("../assets/fontawesome/digital-ocean-brands.svg")
const DockerIcon = require("../assets/fontawesome/docker-brands.svg")
const GitIcon = require("../assets/fontawesome/git-alt-brands.svg")
const HTML5Icon = require("../assets/fontawesome/html5-brands.svg")
const JavascriptIcon = require("../assets/fontawesome/js-square-brands.svg")
const MarkdownIcon = require("../assets/fontawesome/markdown-brands.svg")
const NodeJSIcon = require("../assets/fontawesome/node-js-brands.svg")
const PythonIcon = require("../assets/fontawesome/python-brands.svg")
const UbuntuIcon = require("../assets/fontawesome/ubuntu-brands.svg")

const ComplexPageHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="card no-bg divr">
      <div className="card-body">
        <div className="row">
          <div className="col-md-auto">
            <div className="row">
              <div className="col d-block d-md-none"></div>
              <div className="col-auto"><ProfileImage /></div>
              <div className="col d-block d-md-none"></div>
            </div>
          </div>
          <div className="col text-center text-md-start mt-3 mt-md-0">
            <Link to="/" style={{ color: 'white' }}>
              <h1 className="card-title">{site.title}</h1>
            </Link>
            <p className="card-text d-none d-md-block">{site.description}</p>
            <div className="row mt-2">
              <div className="col-lg text-lg-start text-center">
                <Link to="/posts" className="me-3">Blog</Link>
                <Link to="/projects" className="me-3">Proyectos</Link>
              </div>
              <div className="col-lg-auto mt-2 mt-lg-0 text-lg-end text-center">
                <LinkEmailLabel />
                <br className="d-block d-sm-none" />
                <LinkLinkedIn />
                <LinkPaypal />
                <LinkGitHub />
                <LinkGitLab />
                <LinkTwitter />
                <LinkInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SimplePageFooter = () => (
  <footer>
    <div className="card no-bg divr">
      <div className="card-body">
        <p className="card-text">
          © {new Date().getFullYear()}, Angel Hurtado. Iconos de <a href="https://fontawesome.com/license" >FontAwesome</a>, <a href="https://icons.getbootstrap.com/" >Bootstrap Icons</a>, <a href="https://seeklogo.com/" >SeekLogo</a>
        </p>
      </div>
    </div>
  </footer>
)

const FlexibleInfo = (props: { title: string, children: any }) => {
  return (
    <div className="card no-bg">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4">
            <h4 className="card-title">{props.title}</h4>
          </div>
          <div className="col">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

FlexibleInfo.propTypes = {
  children: PropTypes.node.isRequired,
}

const AboutPage = () => {
  const site = useSiteMetadata()
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <ComplexPageHeader />
      <SEO title="Acerca de" />
      <main>
        <div className="card no-bg d-block d-md-none">
          <div className="card-body">
            <h3 className="card-title">Acerca de mi</h3>
            <p className="card-text ">{site.description}</p>
          </div>
        </div>
        <FlexibleInfo title="Educación">
          <p className="card-text">
            <b>Ingeniería en Tecnologías de la Información y Comunicación</b>
            <br />
            <a href="http://www.utzac.edu.mx" rel="noreferrer" target="_blank">Universidad Tecnológica del Estado de Zacatecas</a>
            <br />
             Guadalupe, Zacatecas | 2017-2021
           </p>
        </FlexibleInfo>
        <FlexibleInfo title="Habilidades">
          <p className="card-text">
            <JavascriptIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <HTML5Icon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <CSS3Icon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <AngularIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <NodeJSIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <PythonIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <GitIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <UbuntuIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <DigitalOceanIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <MarkdownIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <BootstrapIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <DockerIcon style={{ width: '1.5rem', height: '1.5rem', margin: '3px' }} />
            <br />
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
          <p className="card-text">
            1° Zacatecas: Concurso Nacional de Prototipos 2016
            <br />
            19° Nacional: Concurso Nacional de Prototipos 2016
          </p>
        </FlexibleInfo>
      </main>
      <SimplePageFooter />
    </div>
  )
}

export default AboutPage
