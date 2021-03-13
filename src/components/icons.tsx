import React from 'react';

const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const EmailSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const GitlabSVG = require("../assets/fontawesome/gitlab-brands.svg")
const InstagramSVG = require("../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../assets/fontawesome/paypal-brands.svg")

interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (props: IconProps) => {
  const { size } = props;
  return {
    width: size || '1.2rem',
    height: size || '1.2rem'
  }
}

const useClasses = (props: IconProps) => props.className || ""

export const LinkedInIcon = (props: IconProps) => (
  <LinkedInSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const EmailIcon = (props: IconProps) => (
  <EmailSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const GitHubIcon = (props: IconProps) => (
  <GitHubSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const GitlabIcon = (props: IconProps) => (
  <GitlabSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const InstagramIcon = (props: IconProps) => (
  <InstagramSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const TwitterIcon = (props: IconProps) => (
  <TwitterSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const PayPalIcon = (props: IconProps) => (
  <PayPalSVG style={useIconStyle(props)} className={useClasses(props)} />
)

