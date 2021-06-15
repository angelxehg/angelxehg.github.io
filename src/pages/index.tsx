import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import HugeHeader from "../components/HugeHeader"
import DefaultFooter from "../components/Footer"
import { usePages } from "../hooks/use-pages"
import stacks from "../meta/stacks"
import { ProjectCard } from "./projects"

const EmailLink = () => (
  <a href="mailto:sudo@angelxehg.com" title="Email" rel="external">
    sudo@angelxehg.com
  </a>
)

const UTZACLink = () => (
  <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
    UTZAC
  </a>
)

const AboutSection = () => (
  <section id="about">
    <h2>Acerca de mi:</h2>
    <div>
      <div>
        <div>
          <div>
            <h3>Educación</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@ <UTZACLink /> 2017-2021
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h3>Enlaces</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <EmailLink />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
      <h2>
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <div>
        {projects.map(item => (
          <div key={item.id}>
            <ProjectCard item={item} />
          </div>
        ))}
      </div>
      <Link to="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const SkillCard = (props: { title: string; icons: string[] }) => (
  <div>
    <div>
      <h3>{props.title}</h3>
      <p>
        {props.icons.map(icon => (
          <span key={icon}>{icon}</span>
        ))}
      </p>
    </div>
  </div>
)

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <div>
      {stacks.map(({ title, icons }, n) => (
        <div key={n}>
          <SkillCard title={title} icons={icons} />
        </div>
      ))}
    </div>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <HugeHeader />
    <main>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
