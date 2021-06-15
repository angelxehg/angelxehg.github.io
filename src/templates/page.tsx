import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"

import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import { getLinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        caption
        type
        stack
      }
    }
  }
`

interface PageTemplateProps {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
        date: string
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        caption: string
        stack: string
      }
    }
  }
}

const PageTemplate = (props: PageTemplateProps): JSX.Element => {
  const { frontmatter, body } = props.data.mdx
  const { title, date, image, caption, stack } = frontmatter
  const stackIcons = stack ? stack.split(",") : []
  return (
    <Layout>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
      />
      <DefaultNavbar />
      <Container as="header" className="mt-3">
        <h1>{title}</h1>
        <ul>
          <li>Fecha: {date}</li>
          {stackIcons.length > 0 && (
            <li>
              Hecho con{" "}
              {stackIcons.map(toolName => {
                const link = getLinkMeta(toolName)
                return <IconLink key={toolName} meta={link} />
              })}
            </li>
          )}
        </ul>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
      </Container>
      <Container as="main" className="mt-3">
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <Footer />
    </Layout>
  )
}

export default PageTemplate
