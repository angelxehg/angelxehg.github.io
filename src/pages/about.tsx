import React from "react"

import Redirect from "../components/Redirect"

const UTZACLink = () => (
  <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
    UTZAC
  </a>
)

export const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi:</h2>
    <div className="row">
      <div className="col-12 p-sm-1 pb-2">
        <div className="card bg-dark text-light">
          <div className="card-body">
            <h3 className="card-title h5">Educación</h3>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@ <UTZACLink /> 2017-2021
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
