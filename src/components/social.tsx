import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const LinkedInIcon = require("../assets/bootstrap-icons/linkedin.svg")
const EmailIcon = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubIcon = require("../assets/bootstrap-icons/github.svg")
const GitlabIcon = require("../assets/fontawesome/gitlab-brands.svg")
const InstagramIcon = require("../assets/bootstrap-icons/instagram.svg")
const Twitter = require("../assets/bootstrap-icons/twitter.svg")
const PayPalIcon = require("../assets/fontawesome/paypal-brands.svg")

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
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-circle fluid align-self-center" alt="Foto de perfil de Angel" style={{ height: '150px', width: '150px' }} />
}

const LinkIcon = (props: { to: string, title: string, children: any }) => {
  return (
    <a href={props.to} rel="noreferrer" target="_blank" style={{ margin: '3px' }}>
      {props.children}
    </a>
  )
}

interface LinkProps {
  iconSize: string
}

const linkDefaultProps = {
  iconSize: '1.2rem'
}

export const LinkEmail = (props: LinkProps) => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com">
    <EmailIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkEmail.defaultProps = linkDefaultProps

export const LinkEmailLabel = (props: LinkProps) => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com">
    <EmailIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
    contact@angelxehg.com
  </LinkIcon>
)

LinkEmailLabel.defaultProps = linkDefaultProps

export const LinkLinkedIn = (props: LinkProps) => (
  <LinkIcon to="https://www.linkedin.com/in/angelxehg" title="LinkedIn">
    <LinkedInIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkLinkedIn.defaultProps = linkDefaultProps

export const LinkPaypal = (props: LinkProps) => (
  <LinkIcon to="https://www.paypal.me/angelxehg" title="PayPal">
    <PayPalIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkPaypal.defaultProps = linkDefaultProps

export const LinkGitHub = (props: LinkProps) => (
  <LinkIcon to="https://github.com/angelxehg" title="GitHub">
    <GitHubIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkGitHub.defaultProps = linkDefaultProps

export const LinkGitLab = (props: LinkProps) => (
  <LinkIcon to="https://gitlab.com/angelxehg" title="GitLab">
    <GitlabIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkGitLab.defaultProps = linkDefaultProps

export const LinkTwitter = (props: LinkProps) => (
  <LinkIcon to="https://www.twitter.com/angelxehg" title="Twitter">
    <Twitter style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkTwitter.defaultProps = linkDefaultProps

export const LinkInstagram = (props: LinkProps) => (
  <LinkIcon to="https://www.instagram.com/angelxehg" title="Instagram">
    <InstagramIcon style={{ width: props.iconSize, height: props.iconSize, marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkInstagram.defaultProps = linkDefaultProps
