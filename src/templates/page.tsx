import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Badge from "react-bootstrap/Badge"

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
      <div className="bg-inter-background">
        <header className="container-xl ps-sm-4 pe-sm-4 pt-3 pb-2">
          <h1>{title}</h1>
          <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
            <li>Fecha: {date}</li>
            {stackIcons.length > 0 && (
              <li>
                Hecho con{": "}
                {stackIcons.map(toolName => {
                  const link = getLinkMeta(toolName)
                  return (
                    <Badge
                      key={toolName}
                      pill
                      bg="dark"
                      text="light"
                      className="mt-1 me-1"
                    >
                      <IconLink noUnderline meta={link} />
                    </Badge>
                  )
                })}
              </li>
            )}
          </ul>
        </header>
      </div>
      <main className="container-xl ps-sm-4 pe-sm-4 pt-3">
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
        <MDXRenderer>{body}</MDXRenderer>
      </main>
      <Footer />
    </Layout>
  )
}

export default PageTemplate
