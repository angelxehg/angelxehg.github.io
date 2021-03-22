import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout, { Footer, LayoutContent } from "@components/layout"
import SEO from "@components/seo"
import { Grid, Column } from "@components/grid"
import { useContents } from "@hooks/use-contents"
import { Icon } from "@components/icons"
import { LinkExternal } from "@components/social"
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarItem,
} from "@components/navbar"

const Project = props => {
  const { slug, title, extract, image, stack, github, demo } = props
  const stackIcons = stack.split(",")
  return (
    <Column>
      <div className="card no-bg">
        <GatsbyImage image={image} alt={title} />
        <div className="card-body pt-3 pb-3 p-2">
          <div className="row align-items-center">
            <div className="col-auto">
              <Link to={"/" + slug}>
                <h2 className="card-title m-0">{title}</h2>
              </Link>
            </div>
            <div className="col-auto p-0">
              {github && (
                <LinkExternal to={github} title="Repositorio">
                  <Icon name="GitHub" size="1.5rem" />
                </LinkExternal>
              )}
              {demo && (
                <LinkExternal to={demo} title="Demo">
                  <Icon name="Web" size="1.5rem" />
                </LinkExternal>
              )}
            </div>
          </div>
          {stackIcons.map(icon => (
            <Icon key={icon} name={icon} className="me-1" />
          ))}
          <p className="card-text">{extract}</p>
        </div>
      </div>
    </Column>
  )
}

Project.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  extract: PropTypes.string,
  image: PropTypes.object,
  stack: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
}

const ProjectsPage = () => {
  const projects = useContents("project")
  return (
    <Layout>
      <SEO title="Proyectos" lang="es" />
      <Navbar>
        <NavbarBrand title="Mis Proyectos" to="/projects" />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem title="Resumen" to="/" />
          {/* <NavbarItem title="Blog" to="/posts" /> */}
          <NavbarItem title="Trayectoria" to="/about" />
        </NavbarCollapse>
      </Navbar>
      <LayoutContent>
        <Grid>
          {projects.map(
            ({ slug, title, extract, image, stack, github, demo }) => (
              <Project
                key={slug}
                slug={slug}
                title={title}
                extract={extract}
                image={image}
                stack={stack}
                github={github}
                demo={demo}
              />
            )
          )}
        </Grid>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage
