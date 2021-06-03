import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import Footer from "../components/footer"
import SEO from "../components/seo"
import { Icon } from "../components/icons"
import DefaultNavbar from "../components/navbar"
import { RedirectToDevTo } from "../pages/posts"

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
        devToRedirect
        stack
      }
    }
  }
`

interface PostTemplateProps {
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
        devToRedirect: string | undefined
      }
    }
  }
}

const PostTemplate = (props: PostTemplateProps): JSX.Element => {
  const { frontmatter, body } = props.data.mdx
  const { title, date, image, caption, stack, devToRedirect } = frontmatter
  const stackIcons = stack ? stack.split(",") : []
  if (devToRedirect) {
    return (
      <div>
        <SEO
          title={title}
          lang="es"
          image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
        />
        <RedirectToDevTo url={devToRedirect} />
      </div>
    )
  }
  return (
    <div>
      <SEO
        title={title}
        lang="es"
        image={image.childImageSharp.gatsbyImageData.images.fallback?.src || ""}
      />
      <DefaultNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h2">{title}</h1>
        <ul className="p-0 m-0 mb-2" style={{ listStyleType: "none" }}>
          <li>Fecha: {date}</li>
          {stackIcons.length > 0 && (
            <li>
              {stackIcons.map(icon => {
                return (
                  <span
                    key={icon}
                    className="badge rounded-pill bg-dark mt-1 me-1"
                  >
                    <Icon name={icon} /> {icon}
                  </span>
                )
              })}
            </li>
          )}
        </ul>
        <GatsbyImage
          className="mb-2 img-fluid rounded"
          image={image.childImageSharp.gatsbyImageData}
          alt={caption}
        />
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Footer />
    </div>
  )
}

export default PostTemplate
