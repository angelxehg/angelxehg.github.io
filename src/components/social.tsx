import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile21sqrsmall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-circle fluid" alt="Foto de perfil de Angel" style={{ height: '150px', width: '150px' }}/>
}
