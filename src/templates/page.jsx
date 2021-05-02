import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import DefaultFooter from "@components/footer"
import SEO from "@components/seo"
import { LinkIcon } from "@components/icons"
import DefaultNavbar from "@components/navbar"

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
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

const PageTemplate = props => {
  const { frontmatter, body } = props.data.mdx
  const icons = []
  if (frontmatter.stack) {
    frontmatter.stack.split(",").map(i => icons.push(i))
  }
  return (
    <Container fluid="sm" className="mt-3 mb-3">
      <SEO title={frontmatter.title} lang="es" />
      <DefaultNavbar />
      <Container fluid={true} className="pt-3 pb-3">
        <header>
          <h1 className="mt-2">{frontmatter.title}</h1>
          <ul>
            {frontmatter.stack && (
              <li>
                Tecnologias:{" "}
                {icons.map(icon => (
                  <LinkIcon key={icon} name={icon} />
                ))}
              </li>
            )}
            {frontmatter.demo && (
              <li>
                Página web:{" "}
                <LinkIcon name="Web" to={frontmatter.demo} />
              </li>
            )}
            {frontmatter.github && (
              <li>
                Repositorio:{" "}
                <LinkIcon name="GitHub" to={frontmatter.github} />
              </li>
            )}
            <li>Fecha: {frontmatter.date}</li>
          </ul>
        </header>
        <main>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
      </Container>
      <DefaultFooter />
    </Container>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.any,
}

export default PageTemplate
