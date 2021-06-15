import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import { HugeHeader } from "../components/Header"
import DefaultFooter from "../components/Footer"
import { usePages } from "../hooks/use-pages"
import stacks from "../meta/stacks"
import { ProjectCard } from "./projects"
import { LinkMeta } from "../meta/links"
import IconLink from "../components/Link"

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

const SkillCard = (props: { title: string; tools: LinkMeta[] }) => (
  <div>
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.tools.map(icon => (
          <li key={icon.name}>
            <IconLink meta={icon} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <div>
      {stacks.map(({ title, tools }, n) => (
        <div key={n}>
          <SkillCard title={title} tools={tools} />
        </div>
      ))}
    </div>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <HugeHeader />
    <Container as="main">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </Container>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
