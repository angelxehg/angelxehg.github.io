import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import { HugeHeader } from "../components/Header"
import DefaultFooter from "../components/Footer"
import { usePages } from "../hooks/use-pages"
import stacks from "../meta/stacks"
import { ProjectCard } from "./projects"
import { LinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

const UTZACLink = () => (
  <a href="http://www.utzac.edu.mx" rel="external" title="UTZAC">
    UTZAC
  </a>
)

const AboutSection = () => (
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

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
      <h2>
        Últimos <Link to="/projects">proyectos</Link>:
      </h2>
      <div className="row">
        {projects.map(item => (
          <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
            <ProjectCard item={item} titleAs="h3" />
          </div>
        ))}
      </div>
      <Link to="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const SkillCard = (props: { title: string; tools: LinkMeta[] }) => (
  <div className="card bg-dark text-light">
    <div className="card-body">
      <h3 className="card-title h5">{props.title}</h3>
      <p className="card-text">
        {props.tools.map(tool => (
          <span
            key={tool.name}
            className="badge rounded-pill bg-dark text-light mt-1 me-1"
          >
            <IconLink noUnderline meta={tool} />
          </span>
        ))}
      </p>
    </div>
  </div>
)

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <div className="row">
      {stacks.map(({ title, tools }, n) => (
        <div key={n} className="col-12 p-sm-1 pb-2">
          <SkillCard title={title} tools={tools} />
        </div>
      ))}
    </div>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <HugeHeader />
    <main className="container-xl ps-sm-4 pe-sm-4 pb-3">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
