import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'
import SEO from './seo'
import { EIcon, IconSelector } from './icons'

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(
      id: { eq: $id }
    ){
      body
      frontmatter {
        title
        type
        stack
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

// eslint-disable-next-line react/display-name
export default (props: { data: any }) => {
  const { stack } = props.data.mdx;
  const { frontmatter, body } = props.data.mdx;
  const icons: EIcon[] = [];
  if (stack) {
    icons.push(stack.split(',').filter((i: string) => i in EIcon));
  }
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1 className="mt-3">{frontmatter.title}</h1>
      {icons.map(icon => <IconSelector key={icon} icon={icon} className="me-1"/>)}
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
