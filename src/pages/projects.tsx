import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout, { Footer, LayoutContent } from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { IContent, useContents } from "../hooks/use-contents"
import { EIcon, GitHubIcon, IconSelector, WebIcon } from "../components/icons"
import { LinkExternal } from "../components/social"
import { Navbar, NavbarBrand, NavbarToggler, NavbarCollapse, NavbarItem } from "../components/navbar"

const Project = (props: { project: IContent }) => {
  const { slug, title, extract, image, stack, github, demo } = props.project
  const icons = stack
    .split(",")
    .filter(i => i in EIcon)
    .map(i => i as EIcon)
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
                  <GitHubIcon size="1.5rem" />
                </LinkExternal>
              )}
              {demo && (
                <LinkExternal to={demo} title="Demo">
                  <WebIcon size="1.5rem" />
                </LinkExternal>
              )}
            </div>
          </div>
          {icons.map(icon => (
            <IconSelector key={icon} icon={icon} className="me-1" />
          ))}
          <p className="card-text">{extract}</p>
        </div>
      </div>
    </Column>
  )
}

const ProjectsPage = () => {
  const projects = useContents("project")
  return (
    <Layout>
      <SEO title="Proyectos" lang="es"/>
      <Navbar>
        <NavbarBrand title="Mis Proyectos" to="/projects" />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem title="Blog" to="/posts" />
          <NavbarItem title="Resumen" to="/" />
          <NavbarItem title="Trayectoria" to="/about" />
        </NavbarCollapse>
      </Navbar>
      <LayoutContent>
        <Grid>
          {projects.map((item, index) => (
            <Project key={index} project={item} />
          ))}
        </Grid>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage
