import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const LinkedInIcon = require("../assets/bootstrap-icons/linkedin.svg")
const EmailIcon = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubIcon = require("../assets/bootstrap-icons/github.svg")
const GitlabIcon = require("../assets/fontawesome/gitlab-brands.svg")
const Globe2Icon = require("../assets/bootstrap-icons/globe2.svg")
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
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-circle fluid" alt="Foto de perfil de Angel" style={{ height: '150px', width: '150px' }} />
}

const LinkIcon = (props: { to: string, internal: boolean, title: string, showTitle: boolean, children: any }) => {
  return props.internal ? <Link to={props.to} style={{ margin: '3px' }}>
    {props.children}
    {props.showTitle ? props.title : ''}
  </Link> : <a href={props.to} rel="noreferrer" target="_blank" style={{ margin: '3px' }}>
      {props.children}
      {props.showTitle ? props.title : ''}
    </a>
}

LinkIcon.defaultProps = {
  internal: false,
  showTitle: false
}

export const LinkWebsite = (props: {showTitle: boolean}) => (
  <LinkIcon to="/" internal={true} title="angelxehg.com" showTitle={props.showTitle}>
    <Globe2Icon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkWebsite.defaultProps = {
  showTitle: false
}

export const LinkBlog = (props: {showTitle: boolean}) => (
  <LinkIcon to="/posts" internal={true} title="Blog" showTitle={props.showTitle}>
    <Globe2Icon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkBlog.defaultProps = {
  showTitle: false
}

export const LinkProjects = (props: {showTitle: boolean}) => (
  <LinkIcon to="/projects" internal={true} title="Proyectos" showTitle={props.showTitle}>
    <Globe2Icon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkProjects.defaultProps = {
  showTitle: false
}

export const LinkAbout = (props: {showTitle: boolean}) => (
  <LinkIcon to="/about" internal={true} title="Acerca de" showTitle={props.showTitle}>
    <Globe2Icon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkAbout.defaultProps = {
  showTitle: false
}

export const LinkEmail = (props: {showTitle: boolean}) => (
  <LinkIcon to="mailto:contact@angelxehg.com" title="contact@angelxehg.com" showTitle={props.showTitle}>
    <EmailIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkEmail.defaultProps = {
  showTitle: false
}

export const LinkLinkedIn = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://www.linkedin.com/in/angelxehg" title="LinkedIn" showTitle={props.showTitle}>
    <LinkedInIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkLinkedIn.defaultProps = {
  showTitle: false
}

export const LinkPaypal = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://www.paypal.me/angelxehg" title="PayPal" showTitle={props.showTitle}>
    <PayPalIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkPaypal.defaultProps = {
  showTitle: false
}

export const LinkGitHub = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://github.com/angelxehg" title="GitHub" showTitle={props.showTitle}>
    <GitHubIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkGitHub.defaultProps = {
  showTitle: false
}

export const LinkGitLab = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://gitlab.com/angelxehg" title="GitLab" showTitle={props.showTitle}>
    <GitlabIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkGitLab.defaultProps = {
  showTitle: false
}

export const LinkTwitter = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://www.twitter.com/angelxehg" title="Twitter" showTitle={props.showTitle}>
    <Twitter style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkTwitter.defaultProps = {
  showTitle: false
}

export const LinkInstagram = (props: {showTitle: boolean}) => (
  <LinkIcon to="https://www.instagram.com/angelxehg" title="Instagram" showTitle={props.showTitle}>
    <InstagramIcon style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.2rem' }} />
  </LinkIcon>
)

LinkInstagram.defaultProps = {
  showTitle: false
}
