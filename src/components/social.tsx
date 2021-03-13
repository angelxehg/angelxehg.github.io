import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { EmailIcon, GitHubIcon, GitlabIcon, InstagramIcon, LinkedInIcon, PayPalIcon, TwitterIcon } from "./icons"

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

const LinkIcon = (props: { to: string; title: string; children: any }) => {
  return (
    <a
      href={props.to}
      rel="noreferrer"
      target="_blank"
      style={{ margin: "3px" }}
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title={props.title}
    >
      {props.children}
    </a>
  )
}

interface LinkProps {
  iconSize: string
}

const linkDefaultProps = {
  iconSize: "1.2rem",
}

export const LinkEmail = (props: LinkProps) => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com">
    <EmailIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkEmail.defaultProps = linkDefaultProps

export const LinkEmailLabel = (props: LinkProps) => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com">
    <EmailIcon size={props.iconSize}/>
    contact@angelxehg.com
  </LinkIcon>
)

LinkEmailLabel.defaultProps = linkDefaultProps

export const LinkLinkedIn = (props: LinkProps) => (
  <LinkIcon to="https://www.linkedin.com/in/angelxehg" title="LinkedIn">
    <LinkedInIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkLinkedIn.defaultProps = linkDefaultProps

export const LinkPaypal = (props: LinkProps) => (
  <LinkIcon to="https://www.paypal.me/angelxehg" title="PayPal">
    <PayPalIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkPaypal.defaultProps = linkDefaultProps

export const LinkGitHub = (props: LinkProps) => (
  <LinkIcon to="https://github.com/angelxehg" title="GitHub">
    <GitHubIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkGitHub.defaultProps = linkDefaultProps

export const LinkGitLab = (props: LinkProps) => (
  <LinkIcon to="https://gitlab.com/angelxehg" title="GitLab">
    <GitlabIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkGitLab.defaultProps = linkDefaultProps

export const LinkTwitter = (props: LinkProps) => (
  <LinkIcon to="https://www.twitter.com/angelxehg" title="Twitter">
    <TwitterIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkTwitter.defaultProps = linkDefaultProps

export const LinkInstagram = (props: LinkProps) => (
  <LinkIcon to="https://www.instagram.com/angelxehg" title="Instagram">
    <InstagramIcon size={props.iconSize}/>
  </LinkIcon>
)

LinkInstagram.defaultProps = linkDefaultProps
