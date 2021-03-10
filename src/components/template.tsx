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
      <h1 className="mt-3">{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
