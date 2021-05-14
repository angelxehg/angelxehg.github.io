import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Footer from "../components/footer"
import SEO from "../components/seo"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

const PostTemplate = props => {
  const { frontmatter, body } = props.data.mdx
  return (
    <div>
      <SEO title={frontmatter.title} lang="es" />
      <div className="container-xl p-md-4 pt-4 pb-3">
        <h1 className="mt-2">{frontmatter.title}</h1>
        <ul>
          <li>Fecha: {frontmatter.date}</li>
        </ul>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Footer />
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.any,
}

export default PostTemplate
