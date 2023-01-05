import React from "react"

import Redirect from "../components/Redirect"

export const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi</h2>
    <div className="row">
      <div className="col-md-6 p-sm-1 pb-3">
        <div className="card" style={{ height: "100%" }}>
          <div className="card-body">
            <h3 className="card-title h5">Experiencia</h3>
            <p>
              <b>Backend en Columbus.mx</b> (+1 año, desde enero 2022):
              <ul>
                <li>
                  Diseño, desarrollo, documentación y mantenimiento de API REST
                  en Python, con Flask, SQLAlchemy, Docker
                </li>
                <li>
                  Implementación de flujos con Event Driven Design, subscribers
                  con RabbitMQ. Versionado de eventos, para mantener varias
                  versiones de un flujo
                </li>
                <li>
                  Desarrollo siguiendo patrones de diseño y prácticas como
                  Domain Driven Design, arquitectura Hexagonal, Test Driven
                  Development (pruebas unitarias con Pytest)
                </li>
                <li>
                  Consumo de servicios externos como envío de correos, SMS,
                  carga y descarga de archivos en memoria
                </li>
                <li>Consumo y desarrollo de WebHooks</li>
              </ul>
            </p>
            <p>
              <b>Freelancer en Fiverr</b> (2 años, entre 2020-2021):
              <ul>
                <li>
                  Realicé proyectos de desarrollo web y aplicaciones móviles
                  híbridas con Ionic y Angular, para clientes en México y en el
                  extranjero.
                </li>
                <li>
                  Estos proyectos varían desde el mantenimiento de apps
                  existentes, a la creación de nuevas apps a partir de diseño
                  proporcionado por los clientes, iOS y Android
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
