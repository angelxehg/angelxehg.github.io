import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"

import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { Icon } from "../components/icons"

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
    <div>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
      />
      <Container fluid="xl" className="ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h2">{title}</h1>
        <ul className="p-0 m-0 mb-2" style={{ listStyleType: "none" }}>
          <li>Fecha: {date}</li>
          {stackIcons.length > 0 && (
            <li>
              {stackIcons.map(icon => (
                <Badge
                  key={icon}
                  pill
                  bg="dark"
                  text="light"
                  className="mt-1 me-1"
                >
                  <Icon name={icon} /> {icon}
                </Badge>
              ))}
            </li>
          )}
        </ul>
        <GatsbyImage
          className="mb-2 img-fluid rounded"
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <Footer />
    </div>
  )
}

export default PageTemplate
