import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout, { Footer, LayoutContent } from "./layout"
import SEO from "./seo"
import { Icon } from "./icons"
import { LinkExternal } from "./social"
import { Navbar, NavbarBrand, NavbarToggler, NavbarCollapse, NavbarItem } from "./navbar"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        type
        stack
        github
        demo
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

const PageTemplate = (props) => {
  const { frontmatter, body } = props.data.mdx
  const icons = []
  if (frontmatter.stack) {
    frontmatter.stack
      .split(",")
      .map((i) => icons.push(i))
  }
  const isProject = frontmatter.type === "project";
  return (
    <Layout>
      <SEO title={frontmatter.title} lang="es" />
      <Navbar>
        <NavbarBrand
          title={isProject ? "Mis Proyectos" : "Mi Blog"}
          to={isProject ? "/projects" : "/posts"}
        />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem
            title={isProject ? "Blog" : "Proyectos"}
            to={isProject ? "/posts" : "/projects"}
          />
          <NavbarItem title="Resumen" to="/" />
          <NavbarItem title="Trayectoria" to="/about" />
        </NavbarCollapse>
      </Navbar>
      <LayoutContent>
        <div className="row align-items-center">
          <div className="col-auto">
            <h1 className="mt-3">{frontmatter.title}</h1>
          </div>
          <div className="col-auto">
            {frontmatter.github && (
              <LinkExternal to={frontmatter.github} title="Repositorio">
                <Icon name="GitHub" size="1.5rem" />
              </LinkExternal>
            )}
            {frontmatter.demo && (
              <LinkExternal to={frontmatter.demo} title="Demo">
                <Icon name="Web" size="1.5rem" />
              </LinkExternal>
            )}
          </div>
        </div>
        {frontmatter.stack && (
          <p>
            Tecnologias:{" "}
            {icons.map(icon => (
              <Icon key={icon} name={icon} className="me-1" />
            ))}
          </p>
        )}
        <p>Fecha: {frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.any
}

export default PageTemplate
