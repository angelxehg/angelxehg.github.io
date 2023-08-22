import React from "react"

import Redirect from "../components/Redirect"
// TODO: ul not a descendant of p
export const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi</h2>
    <div className="row">
      <div className="col-md-6 p-sm-1 pb-3">
        <div className="card" style={{ height: "100%" }}>
          <div className="card-body">
            <h3 className="card-title h5">Experiencia</h3>
            <p>
              <b>Software Engineer en Columbus.mx</b> (1 año, desde enero 2022):
              <ul>
                <li>
                  Diseño y desarrollo siguiendo metodologías como DDD, Event
                  Driven Design, Arquitectura Hexagonal y TDD
                </li>
                <li>Diseño y normalización de bases de datos.</li>
                <li>
                  Aplicación de patrones de diseño Repository, Adapter,
                  Strategy, Decorator, Factory Method.
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
                  Consumo de servicios externos como envío de correos, SMS,
                  carga, descarga de archivos
                </li>
              </ul>
            </p>
            <p>
              <b>Freelancer en Fiverr</b> (2 años, 2020-2021):
              <ul>
                <li>
                  Desarrollo de aplicaciones para clientes en México y en el
                  extranjero, en varios formatos (PWA, App Hibrida) y
                  plataformas (Web, Android). Desarrollo backend con Django.
                </li>
                <li>
                  Desarrollo con React, Angular, Ionic. Integración con
                  Contentful, Firebase, servicios de pagos y Ads.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-sm-1 pb-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title h5">Ubicación</h3>
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
          <div className="card-body">
            <h3 className="card-title h5">Acerca de mi</h3>
            <p className="card-text m-0 mt-2">
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
          <div className="card-body">
            <h3 className="card-title h5">Educación</h3>
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
    </div>
  </section>
)

const AboutPage = (): JSX.Element => <Redirect title="Index" url="/#about" />

export default AboutPage
