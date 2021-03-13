import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { ProfileImage, LinkExternal } from "../components/social"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { AngularIcon, AWSIcon, BootstrapIcon, CSS3Icon, DigitalOceanIcon, EmailIcon, FirebaseIcon, GatsbyIcon, GitHubIcon, GitIcon, GitlabIcon, HTML5Icon, IconSelector, InstagramIcon, IonicIcon, JavascriptIcon, LinkedInIcon, MarkdownIcon, NetlifyIcon, NodeJSIcon, NPMIcon, PayPalIcon, PythonIcon, ReactIcon, TwitterIcon, TypescriptIcon, UbuntuIcon } from "../components/icons"

const ComplexPageHeader = () => {
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
                {/* <Link to="/posts" className="me-3">
                  Blog
                </Link> */}
                <Link to="/projects" className="me-3">
                  Proyectos
                </Link>
              </div>
              <div className="col-lg-auto mt-2 mt-lg-0 text-lg-end text-center">
                <LinkExternal to="mailto:contact@angelxehg.com" title="Email">
                  <EmailIcon className="me-1" />
                  contact@angelxehg.com
                </LinkExternal>
                <br className="d-block d-sm-none" />
                <LinkExternal to="https://www.linkedin.com/in/angelxehg" title="LinkedIn (/in/angelxehg)">
                  <LinkedInIcon />
                </LinkExternal>
                <LinkExternal to="https://www.paypal.me/angelxehg" title="PayPal (@angelxehg)">
                  <PayPalIcon />
                </LinkExternal>
                <LinkExternal to="https://github.com/angelxehg" title="GitHub (@angelxehg)">
                  <GitHubIcon />
                </LinkExternal>
                <LinkExternal to="https://gitlab.com/angelxehg" title="GitLab (@angelxehg)">
                  <GitlabIcon />
                </LinkExternal>
                <LinkExternal to="https://www.twitter.com/angelxehg" title="Twitter (@angelxehg)">
                  <TwitterIcon />
                </LinkExternal>
                <LinkExternal to="https://www.instagram.com/angelxehg" title="Instagram (@angelxehg)">
                  <InstagramIcon />
                </LinkExternal>
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
    <nav className="navbar navbar-dark pg-bg divr">
      <div className="container-fluid">
        <p className="m-0">
          © {new Date().getFullYear()}, Angel Hurtado. Las marcas y logos pertenecen a sus respectivos dueños. Iconos obtenidos desde{" "}
          <LinkExternal to="https://fontawesome.com/license">FontAwesome</LinkExternal>{", "}
          <LinkExternal to="https://icons.getbootstrap.com/">Bootstrap Icons</LinkExternal>{", "}
          <LinkExternal to="https://seeklogo.com/">SeekLogo</LinkExternal>{", "}
          <LinkExternal to="https://ionicons.com/">Ionicons</LinkExternal>
        </p>
      </div>
    </nav>
  </footer>
)

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
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <ComplexPageHeader />
      <SEO title="Acerca de" />
      <main className="container-fluid pt-3 pb-3">
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
            <HTML5Icon className="ms-1 me-1" />
            <CSS3Icon className="me-1" />
            <TypescriptIcon className="me-1" />
            <JavascriptIcon className="me-1" />
            <PythonIcon className="me-1" />
            <br />
            Frameworks:
            <ReactIcon className="ms-1 me-1" />
            <IonicIcon className="me-1" />
            <GatsbyIcon className="me-1" />
            <AngularIcon className="me-1" />
            <br />
            Herramientas:
            <NodeJSIcon className=" ms-1 me-1" />
            <NPMIcon className="me-1" />
            <GitIcon className="me-1" />
            <MarkdownIcon className="me-1" />
            <BootstrapIcon className="me-1" />
            <br />
            Plataformas:
            <UbuntuIcon className="ms-1 me-1" />
            <NetlifyIcon className="me-1" />
            <AWSIcon className="me-1" />
            <FirebaseIcon className="me-1" />
            <DigitalOceanIcon className="me-1" />
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
      </main>
      <SimplePageFooter />
    </div>
  )
}

export default AboutPage
