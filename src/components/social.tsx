import React from "react"

interface SocialLink {
  to: string
  title: string
  icon: string
}

export const resumeLink: SocialLink = {
  to: "https://drive.google.com/drive/folders/18DEv-IdP2veHzUINHafEk4Gz9i2zakzG?usp=sharing",
  title: "Descarga mi Curriculum",
  icon: "Document"
}

export const devToLink: SocialLink = {
  to: "https://dev.to/angelxehg",
  title: "Visita mi blog en dev.to",
  icon: "Dev.to",
}

export const linkedInLink: SocialLink = {
  to: "https://www.linkedin.com/in/angelxehg",
  title: "LinkedIn (/in/angelxehg)",
  icon: "LinkedIn",
}

export const payPalLink: SocialLink = {
  to: "https://www.paypal.me/angelxehg",
  title: "PayPal (@angelxehg)",
  icon: "PayPal",
}

export const gitHubLink: SocialLink = {
  to: "https://github.com/angelxehg",
  title: "GitHub (@angelxehg)",
  icon: "GitHub",
}

export const gitLabLink: SocialLink = {
  to: "https://gitlab.com/angelxehg",
  title: "GitLab (@angelxehg)",
  icon: "GitLab",
}

export const twitterLink: SocialLink = {
  to: "https://www.twitter.com/angelxehg",
  title: "Twitter (@angelxehg)",
  icon: "Twitter",
}

export const instagramLink: SocialLink = {
  to: "https://www.instagram.com/angelxehg",
  title: "Instagram (@angelxehg)",
  icon: "Instagram",
}

export const socialLinks: SocialLink[] = [
  resumeLink,
  devToLink,
  linkedInLink,
  payPalLink,
  gitHubLink,
  gitLabLink,
  twitterLink,
  instagramLink,
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
    rel="noopener"
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
