import React from "react"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import DefaultFooter from "../components/Footer"
import stacks from "../meta/stacks"

const EnvelopeFillSvg = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubSvg = require("../assets/bootstrap-icons/github.svg")
const LinkedInSvg = require("../assets/bootstrap-icons/linkedin.svg")
const VectorPenSvg = require("../assets/bootstrap-icons/vector-pen.svg")

const EmailIconLink = (): JSX.Element => (
  <a
    href="mailto:angelxehg@proton.me"
    rel="external"
    title="Send email to Angel"
    style={{ textDecoration: "none" }}
  >
    <EnvelopeFillSvg style={{ marginRight: "4px" }} />
    angelxehg@proton.me
  </a>
)

const LinkedInIconLink = (): JSX.Element => (
  <a
    href="https://www.linkedin.com/in/angelxehg"
    rel="external"
    title="LinkedIn (/in/angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <LinkedInSvg style={{ marginRight: "4px" }} />
    LinkedIn (/in/angelxehg)
  </a>
)

const GitHubIconLink = (): JSX.Element => (
  <a
    href="https://github.com/angelxehg"
    rel="external"
    title="GitHub (@angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <GitHubSvg style={{ marginRight: "4px" }} />
    GitHub (@angelxehg)
  </a>
)

const DevToInconLink = (): JSX.Element => (
  <a
    href="https://dev.to/angelxehg"
    rel="external"
    title="dev.to/angelxehg"
    style={{ textDecoration: "none" }}
  >
    <VectorPenSvg style={{ marginRight: "4px" }} />
    dev.to/angelxehg
  </a>
)

const SocialLinks = () => (
  <nav>
    <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
      <li style={{ marginBottom: "10px" }}>
        <EmailIconLink />
      </li>
      <li style={{ marginBottom: "10px" }}>
        <LinkedInIconLink />
      </li>
      <li style={{ marginBottom: "10px" }}>
        <GitHubIconLink />
      </li>
      <li style={{ marginBottom: "10px" }}>
        <DevToInconLink />
      </li>
    </ul>
  </nav>
)

export const SkillCard = (props: { title: string; tools: string[] }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title h5">{props.title}</h3>
      <p className="card-text">
        {props.tools.map(toolName => (
          <span key={toolName} className="badge rounded-pill mt-1 me-1">
            {toolName}
          </span>
        ))}
      </p>
    </div>
  </div>
)

export const AboutSection = () => (
  <section id="about">
    <div className="row">
      <div className="col-lg-4 p-sm-1 pb-3">
        <div className="card">
          <h2 className="card-header h5">Acerca de mi</h2>
          <div className="card-body">
            <p className="card-text m-0">
              Comencé con desarrollo móvil con Windows Phone, mis primeros
              lenguajes fueron C# y Visual Basic. Con estos desarrollos llegué a
              participar en concursos escolares. A partir de la universidad me
              acerqué al desarrollo web, tanto frontend como backend. Durante el
              último año me he dedicado principalmente a Backend.
            </p>
            <p className="card-text m-0 mt-2">
              Mis pasatiempos son escuchar música, jugar videojuegos de
              estrategia y construcción.
            </p>
          </div>
        </div>
        <div className="card mt-2">
          <h2 className="card-header h5">Ubicación</h2>
          <div className="card-body">
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <b>Origen</b>: Fresnillo Zacatecas, MX
              </li>
              <li>
                <b>Idiomas</b>: Español (nativo), Inglés (intermedio)
              </li>
            </ul>
          </div>
        </div>
        <div className="card mt-2">
          <h2 className="card-header h5">Educación</h2>
          <div className="card-body">
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />
                <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
                  Universidad Tecnológica del Estado de Zacatecas
                </a>
                <br />
                2017 - 2021 (En proceso de titulación)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 p-sm-1 pb-3">
        <div className="card">
          <h2 className="card-header h5">Experiencia</h2>
          <div className="card-body">
            <p>
              <b>Software Engineer en Columbus.mx</b> (+2 años, desde enero
              2022):
            </p>
            <ul>
              <li>
                Diseño y desarrollo siguiendo metodologías como DDD, Event
                Driven Design, Arquitectura Hexagonal y TDD
              </li>
              <li>Diseño y normalización de bases de datos.</li>
              <li>
                Aplicación de patrones de diseño Repository, Adapter, Strategy,
                Decorator, Factory Method.
              </li>
              <li>
                Conocimiento de Python, SQL, TypeScript. Uso de herramientas
                como SQLAlchemy, RabbitMQ, Docker, Postgres, Oracle, Pytest,
                Swagger
              </li>
              <li>
                Implementación de flujos asincronos, mediante API REST,
                WebHooks, Domain Events y Subscribers. Versionado de Domain
                Events y de APIs
              </li>
              <li>
                Consumo de servicios externos como envío de correos, SMS, carga,
                descarga de archivos
              </li>
            </ul>
            <p>
              <b>Freelancer en Fiverr</b> (~2 años, 2020-2021):
            </p>
            <ul>
              <li>
                Desarrollo de aplicaciones para clientes en México y en el
                extranjero, en varios formatos (PWA, App Hibrida) y plataformas
                (Web, Android). Desarrollo backend con Django.
              </li>
              <li>
                Desarrollo con React, Angular, Ionic. Integración con
                Contentful, Firebase, servicios de pagos y Ads.
              </li>
            </ul>
          </div>
        </div>
        {stacks.map(({ title, tools }, n) => (
          <div key={n} className="card mt-2">
            <h2 className="card-header h5">{title}</h2>
            <div className="card-body">
              <p className="card-text">
                {tools.map(toolName => (
                  <span key={toolName} className="badge rounded-pill mt-1 me-1">
                    {toolName}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <Hero>
      <img
        src="images/2023-12-13.Public.webp"
        className="rounded-circle fluid align-self-center"
        alt="Avatar de Angel"
        style={{ height: "150px", width: "150px" }}
      />
      <header className="mt-2">
        <h1>Angel Hurtado</h1>
        <p>Software Engineer</p>
      </header>
      <SocialLinks />
    </Hero>
    <main className="container-lg ps-sm-4 pe-sm-4 pb-3">
      <AboutSection />
    </main>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
