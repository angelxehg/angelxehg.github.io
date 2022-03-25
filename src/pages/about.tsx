import React from "react"

import Redirect from "../components/Redirect"

export const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi</h2>
    <div className="row">
      <div className="col-12 p-sm-1 pb-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title h5">Trayectoria</h3>
            <p className="card-text m-0">
              Mi historia en el mundo de la tecnología comienza en 2014, cuando
              programé mis primeras aplicaciones, para Windows Phone y Windows.
              Para lograr esto aprendí Visual Basic, y posteriormente C# y XAML.
              Realicé algunos proyectos que me ayudaron a entender muchas de las
              bases de la programación.
            </p>
            <p className="card-text m-0 mt-2">
              Fue en la Universidad donde comencé a aprender y trabajar con
              tecnologías web, donde aprendí HTML, Python y JavaScript. También
              durante este tiempo aprendí por mi cuenta Angular, React y
              Firebase, y descubrí que lo mio es el desarrollo web.
            </p>
            <p className="card-text m-0 mt-2">
              Desde 2020 he completado proyectos como{" "}
              <a
                href="https://www.fiverr.com/angelxehg"
                rel="external"
                title="Fiverr profile"
              >
                freelancer en Fiverr
              </a>{" "}
              . Ahora acabo de terminar mi carrera en la{" "}
              <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
                Universidad Tecnológica del Estado de Zacatecas
              </a>
              , pero continúo aprendiendo{" "}
              <a href="#skills">nuevas herramientas</a> y creando{" "}
              <a href="#projects">proyectos</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-sm-1 pb-3">
        <div className="card" style={{ height: "100%" }}>
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
      <div className="col-md-6 p-sm-1 pb-3">
        <div className="card" style={{ height: "100%" }}>
          <div className="card-body">
            <h3 className="card-title h5">Ubicación</h3>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <b>Origen</b>: Zacatecas, México
              </li>
              <li>
                <b>Idiomas</b>: Español (nativo), Inglés (intermedio)
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
