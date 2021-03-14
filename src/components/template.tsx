import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "./seo"
import { EIcon, GitHubIcon, IconSelector, WebIcon } from "./icons"
import { LinkExternal } from "./social"

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

// eslint-disable-next-line react/display-name
export default (props: { data: any }) => {
  const { frontmatter, body } = props.data.mdx
  const icons: EIcon[] = []
  if (frontmatter.stack) {
    frontmatter.stack
      .split(",")
      .filter((i: string) => i in EIcon)
      .map((i: EIcon) => {
        icons.push(i)
      })
  }
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="mt-3">{frontmatter.title}</h1>
        </div>
        <div className="col-auto">
          {frontmatter.github && (
            <LinkExternal to={frontmatter.github} title="Repositorio">
              <GitHubIcon size="1.5rem" />
            </LinkExternal>
          )}
          {frontmatter.demo && (
            <LinkExternal to={frontmatter.demo} title="Demo">
              <WebIcon size="1.5rem" />
            </LinkExternal>
          )}
        </div>
      </div>
      {frontmatter.stack && (
        <p>
          Tecnologias:{" "}
          {icons.map(icon => (
            <IconSelector key={icon} icon={icon} className="me-1" />
          ))}
        </p>
      )}
      <p>Fecha: {frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
