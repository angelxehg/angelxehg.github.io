import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
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
      }
    }
  }
}

const PageTemplate = (props: PageTemplateProps): JSX.Element => {
  const { frontmatter, body } = props.data.mdx
  const { title, image, caption } = frontmatter
  return (
    <Layout>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
      />
      <DefaultNavbar />
      <div className="bg-inter">
        <header className="container-sm ps-sm-4 pe-sm-4 pt-3 pb-2">
          <h1>{title}</h1>
          <p>{caption}</p>
          <Link to="/projects">{"< "}Volver a Proyectos</Link>
        </header>
      </div>
      <div className="container-sm ps-sm-4 pe-sm-4 pt-3">
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
      </div>
      <main className="container-sm ps-sm-4 pe-sm-4 pt-3">
        <MDXRenderer>{body}</MDXRenderer>
      </main>
      <Footer />
    </Layout>
  )
}

export default PageTemplate
