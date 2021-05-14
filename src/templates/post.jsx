import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import Footer from "../components/footer"
import SEO from "../components/seo"
import { PostsNavbar } from "../components/navbar"

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
      }
    }
  }
`

const PostTemplate = props => {
  const { frontmatter, body } = props.data.mdx
  const { title, date, image, caption } = frontmatter;
  return (
    <div>
      <SEO title={title} lang="es" />
      <PostsNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <GatsbyImage
          className="mb-2 img-fluid rounded"
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
        <h1 className="h2">{title}</h1>
        <ul className="p-0 m-0 mb-2" style={{ listStyleType: "none" }}>
          <li>Fecha: {date}</li>
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
