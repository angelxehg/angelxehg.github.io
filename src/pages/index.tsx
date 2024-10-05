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
const ThreadsSvg = require("../assets/bootstrap-icons/threads.svg")

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
    /in/angelxehg
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
    angelxehg
  </a>
)

const DevToIconLink = (): JSX.Element => (
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

const ThreadsIconLink = (): JSX.Element => (
  <a
    href="https://threads.net/angelxehg"
    rel="external"
    title="Threads (@angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <ThreadsSvg style={{ marginRight: "4px" }} />
    angelxehg
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
        <DevToIconLink />
      </li>
      <li style={{ marginBottom: "10px" }}>
        <ThreadsIconLink />
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
          <h2 className="card-header h5">Ubicación</h2>
          <div className="card-body">
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <b>Origen</b>: Fresnillo Zacatecas, MX
              </li>
              <li>
                <b>Idiomas</b>: Español, Inglés
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
                Sep 2019 - Abr 2021
              </li>
              <li>
                Técnico Superior en Tecnologías de la Información y
                Comunicación, área Sistemas
                <br />
                <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
                  Universidad Tecnológica del Estado de Zacatecas
                </a>
                <br />
                Sep 2017 - Ago 2019
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
              <b>Software Engineer en Columbus.mx</b> (Ene 2022 - Abr 2024):
            </p>
            <ul>
              <li>
                Desarrollo, mantenimiento de aplicaciones de Backend con Python,
                Flask, Java, Spring Framework, Hibernate.
              </li>
              <li>
                Diseño de tablas, normalización, manejo de bases de datos con
                PostgreSQL, Oracle DB, SQLAlchemy, Flyway. Consultas SQL,
                configuración de Change Data Capture con Debezium, llamadas a de
                Stored Procedures, uso de Multi-tenancy a nivel esquema y base
                de datos como estrategia de Data Governance.
              </li>
              <li>
                Diseño, implementación de flujos de comunicación entre sistemas,
                mediante colas RabbitMQ, Redpanda (Kafka), Server Send Events,
                Redis, WebHooks, HTTP y gRPC requests, con sistemas nuevos y
                legacy.
              </li>
              <li>
                Integración, uso de servicios de infraestructura cloud con AWS
                S3, AWS Cognito, Textract, API REST, envío de correos, envío de
                SMS, carga y descarga de archivos.
              </li>
              <li>
                Herramientas y librerías como Jooq, Hibernate, Docker, Ubuntu,
                Reflections, Apache POI, GitHub Actions.
              </li>
              <li>
                Uso de patrones y metodologías como Domain Driven Design,
                Hexagonal Architecture, Event Driven Design, Test Driven
                Development, Transitional Architecture, Stateless Applications.
                Uso de Jira y partes de SCRUM.
              </li>
              <li>
                Aplicación de patrones de diseño Repository, Strategy,
                Decorator, Factory Method.
              </li>
            </ul>
            <p>
              <b>Freelancer en Fiverr</b> (Jul 2020 - Dic 2021):
            </p>
            <ul>
              <li>
                Trabajé en la plataforma fiverr.com/angelxehg para clientes en
                distintos países, obtuve calificaciones positivas.
              </li>
              <li>
                Diseño, implementación, mantenimiento de aplicaciones Web,
                Mobile y PWA, con la plataforma Ionic, 5 y 6, con Angular y
                React. y Targets PWA, Android y iOS. Casi siempre con
                Typescript, CSS y SCSS.
              </li>
              <li>
                Integración de servicios BaaS como Contentful, Firebase, AWS
                Amplify, y usando mecanismos Oauth2 y REST.
              </li>
              <li>
                Integración de plugins de funcionalidades nativas, de pagos,
                subscripciones y anuncios, Cordova y Capacitor.
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
        src="images/2024-10-21.Work.Square.webp"
        className="rounded-circle fluid align-self-center"
        alt="Avatar de Angel"
        style={{ height: "160px", width: "160px" }}
      />
      <header className="mt-2">
        <h1>Angel Hurtado</h1>
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
