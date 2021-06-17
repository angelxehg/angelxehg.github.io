import React from "react"

import "./Header.scss"

import { CreateIcon, CreateLink } from "./Link"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const email = {
  from: "Email",
  title: "Enviame un Email",
  href: "mailto:sudo@angelxehg.com",
}

const resume = {
  from: "File",
  title: "Descarga mi CV",
  href: "https://drive.google.com/drive/folders/18DEv-IdP2veHzUINHafEk4Gz9i2zakzG?usp=sharing",
}

const devTo = {
  from: "Dev.to",
  title: "Visita mi blog en dev.to",
  href: "https://dev.to/angelxehg",
}

const linkedIn = {
  from: "LinkedIn",
  title: "LinkedIn (/in/angelxehg)",
  href: "https://www.linkedin.com/in/angelxehg",
}

const gitHub = {
  from: "GitHub",
  title: "GitHub (@angelxehg)",
  href: "https://github.com/angelxehg",
}

const twitter = {
  from: "Twitter",
  title: "Twitter (@angelxehg)",
  href: "https://www.twitter.com/angelxehg",
}

const instagram = {
  from: "Instagram",
  title: "Instagram (@angelxehg)",
  href: "https://www.instagram.com/angelxehg",
}

const socialLinks = [email, resume, devTo, linkedIn, gitHub, twitter, instagram]

const SocialLinks = () => (
  <nav>
    <p className="d-none d-sm-block">
      {socialLinks.map(({ from, title, href }) => (
        <CreateIcon
          key={href}
          from={from}
          extend={{ title, href }}
          iconProps={{ size: "1.5rem" }}
        />
      ))}
    </p>
    <ul className="p-0 m-0 d-sm-none" style={{ listStyleType: "none" }}>
      {socialLinks.map(({ from, title, href }) => (
        <li key={href}>
          <CreateLink from={from} extend={{ title, href }} />
        </li>
      ))}
    </ul>
  </nav>
)

export const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <div className="bg-inter-background">
      <div className="container-sm ps-sm-4 pe-sm-4 huge-header pt-3 pb-2">
        <img
          src="/images/Profile.500.Sqr.jpg"
          className="rounded-circle fluid align-self-center"
          alt="Foto de perfil de Angel"
          style={{ height: "120px", width: "120px" }}
        />
        <header className="mt-2">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </header>
        <SocialLinks />
      </div>
    </div>
  )
}
