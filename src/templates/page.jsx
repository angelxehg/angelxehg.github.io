import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import FluidLayout, { BaseLayout } from "@layouts/fluid"
import Footer from "@components/footer"
import SEO from "@components/seo"
import { LinkIcon } from "@components/icons"
import { LinkExternal } from "@components/social"
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
    <BaseLayout>
      <SEO title={frontmatter.title} lang="es" />
      <DefaultNavbar />
      <FluidLayout>
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
              <LinkExternal to={frontmatter.demo} title="Demo">
                {frontmatter.demo}
              </LinkExternal>
            </li>
          )}
          {frontmatter.github && (
            <li>
              Repositorio:{" "}
              <LinkExternal to={frontmatter.github} title="Repositorio">
                {frontmatter.github}
              </LinkExternal>
            </li>
          )}
          <li>Fecha: {frontmatter.date}</li>
        </ul>
        <MDXRenderer>{body}</MDXRenderer>
      </FluidLayout>
      <Footer />
    </BaseLayout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.any,
}

export default PageTemplate
