import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Icons } from "./icons";

export const socialLinks = [
  {
    to: "https://www.linkedin.com/in/angelxehg",
    title: "LinkedIn (/in/angelxehg)",
    icon: Icons.LinkedIn
  },
  {
    to: "https://www.paypal.me/angelxehg",
    title: "PayPal (@angelxehg)",
    icon: Icons.PayPal
  },
  {
    to: "https://github.com/angelxehg",
    title: "GitHub (@angelxehg)",
    icon: Icons.GitHub
  },
  {
    to: "https://gitlab.com/angelxehg",
    title: "GitLab (@angelxehg)",
    icon: Icons.GitLab
  },
  {
    to: "https://www.twitter.com/angelxehg",
    title: "Twitter (@angelxehg)",
    icon: Icons.Twitter
  },
  {
    to: "https://www.instagram.com/angelxehg",
    title: "Instagram (@angelxehg)",
    icon: Icons.Instagram
  },
]

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
      className="rounded-circle fluid align-self-center mt-3"
      alt="Foto de perfil de Angel"
      style={{ height: "150px", width: "150px" }}
    />
  )
}

export const LinkExternal = (props) => (
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

LinkExternal.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}
