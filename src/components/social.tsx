import React from "react"

export const socialLinks = [
  {
    to: "https://drive.google.com/drive/folders/18DEv-IdP2veHzUINHafEk4Gz9i2zakzG?usp=sharing",
    title: "Descarga mi Curriculum",
    icon: "Document",
  },
  {
    to: "https://dev.to/angelxehg",
    title: "Visita mi blog en dev.to",
    icon: "Dev.to",
  },
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

export const ProfileImage = (): JSX.Element => {
  return (
    <img
      src="/images/Profile.500.Sqr.jpg"
      className="rounded-circle fluid align-self-center"
      alt="Foto de perfil de Angel"
      style={{ height: "120px", width: "120px" }}
    />
  )
}

interface LinkExternalProps {
  to: string
  title?: string
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export const LinkExternal = (props: LinkExternalProps): JSX.Element => (
  <a
    href={props.to}
    rel="noreferrer"
    target="_blank"
    style={{ margin: "3px" }}
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title={props.title || "Link"}
    className={props.className || ""}
  >
    {props.children}
  </a>
)
