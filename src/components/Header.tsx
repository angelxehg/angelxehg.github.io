import React from "react"

import "./Header.scss"

import { CreateIcon, CreateLink } from "./Link"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import socialLinks from "../meta/links/social"

const SocialLinks = () => (
  <nav>
    <p className="d-none d-sm-block">
      {socialLinks.map(({from, title, href}) => (
        <CreateIcon
          key={href}
          from={from}
          extend={{title, href}}
          iconProps={{ size: "1.5rem" }}
        />
      ))}
    </p>
    <ul className="p-0 m-0 d-sm-none" style={{ listStyleType: "none" }}>
      {socialLinks.map(({from, title, href}) => (
        <li key={href}>
          <CreateLink from={from} extend={{title, href}}/>
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
