import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "@components/seo"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import AboutSection from "../sections/about"
import EducationSection from "../sections/education"
import SkillsSection from "../sections/skills"
import ProjectsSection from '../sections/projects'

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Inicio" lang="es" />
      <Container fluid="md" className="pt-3 pb-3">
        <header>
          <h1>{site.title}</h1>
          <p>{site.description}</p>
          <ul>
            <li>
              <a href="#about">Acerca de</a>
            </li>
            <li>
              <a href="#education">Educación</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
          </ul>
        </header>
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </Container>
    </div>
  )
}

export default IndexPage
