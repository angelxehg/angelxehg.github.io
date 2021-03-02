import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Globe2Icon = require("../assets/bootstrap-icons/globe2.svg")
const EmailIcon = require("../assets/bootstrap-icons/envelope-fill.svg")

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
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-circle fluid" alt="Foto de perfil de Angel" style={{ height: '150px', width: '150px' }} />
}

const LinkIcon = (props: { to: string, internal: boolean, title: string, children: any }) => {
  return <div className="col-md mt-2 mt-md-0">
    {props.internal ? <Link to={props.to} style={{ margin: '3px' }}>
      {props.children}
      {props.title}
    </Link> : <a href={props.to} rel="noreferrer" target="_blank" style={{ margin: '3px' }}>
      {props.children}
      {props.title}
    </a>}
  </div>
}

LinkIcon.defaultProps = {
  internal: false
}

export const LinkWebsite = () => (
  <LinkIcon to="/" title="angelxehg.com">
    <Globe2Icon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

export const LinkEmail = () => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com">
    <EmailIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)
