import React from "react"
import PropTypes from "prop-types"

export const socialLinks = [
  {
    to: "https://www.linkedin.com/in/angelxehg",
    title: "LinkedIn (/in/angelxehg)",
    icon: "LinkedIn",
  },
  {
    to: "https://www.paypal.me/angelxehg",
    title: "PayPal (@angelxehg)",
    icon: "PayPal",
  },
  {
    to: "https://github.com/angelxehg",
    title: "GitHub (@angelxehg)",
    icon: "GitHub",
  },
  {
    to: "https://gitlab.com/angelxehg",
    title: "GitLab (@angelxehg)",
    icon: "GitLab",
  },
  {
    to: "https://www.twitter.com/angelxehg",
    title: "Twitter (@angelxehg)",
    icon: "Twitter",
  },
  {
    to: "https://www.instagram.com/angelxehg",
    title: "Instagram (@angelxehg)",
    icon: "Instagram",
  },
]

export const ProfileImage = () => {
  return (
    <img
      src="/images/profile21sqrsmall.jpg"
      className="rounded-circle fluid align-self-center"
      alt="Foto de perfil de Angel"
      style={{ height: "150px", width: "150px" }}
    />
  )
}

export const LinkExternal = props => (
  <a
    href={props.to}
    rel="noreferrer"
    target="_blank"
    style={{ margin: "3px", color: 'black' }}
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
  children: PropTypes.node,
}
