import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile21sqrsmall.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp) {
    return <div>Picture not found</div>
  }
  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className="rounded-circle fluid align-self-center"
      alt="Foto de perfil de Angel"
      style={{ height: "150px", width: "150px" }}
    />
  )
}

interface LinkExternalProps {
  to: string
  title?: string
  children: any
}

export const LinkExternal = (props: LinkExternalProps) => (
  <a
    href={props.to}
    rel="noreferrer"
    target="_blank"
    style={{ margin: "3px" }}
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title={props.title || "Link"}
  >
    {props.children}
  </a>
)
