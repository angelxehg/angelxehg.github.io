import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'
import SEO from './seo'

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(
      id: { eq: $id }
    ){
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

// eslint-disable-next-line react/display-name
export default (props: { data: any }) => {
  const { frontmatter, body } = props.data.mdx
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="card no-bg">
        <div className="card-body">
          <h1 className="card-title">{frontmatter.title}</h1>
          <p className="card-subtitle">{frontmatter.date}</p>
        </div>
        <div className="card-body">
          <MDXRenderer className="card-text" >{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
