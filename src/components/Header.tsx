import React from "react"

import "./Header.scss"

import { CreateIcon, CreateLink } from "./Link"

const email = {
  from: "Email",
  title: "Enviame un Email",
  href: "mailto:angelxehg@pm.me",
}

const resume = {
  from: "File",
  title: "Descarga mi CV",
  href: "/CV-AngelHurtado-Nov-2021.pdf",
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

const platzi = {
  from: "Diplomas",
  title: 'Mis diplomas',
  href: 'https://platzi.com/p/angelxehg'
}

const socialLinks = [email, resume, platzi, devTo, linkedIn, gitHub, twitter,]

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

export const HugeHeader = (): JSX.Element => (
  <div className="hero">
    <div className="container-lg ps-sm-4 pe-sm-4 huge-header pt-3 pb-3">
      <img
        src="/images/Avataaars.Smile.Sqr.Opt.png"
        className="rounded-circle fluid align-self-center"
        alt="Avatar de Angel"
        style={{ height: "120px", width: "120px", background: "blueviolet" }}
      />
      <header className="mt-2">
        <h1>Angel Hurtado</h1>
        <p>
          ¡Hola mundo! Hago web development con <CreateLink from="JavaScript" />
          , <CreateLink from="React" /> y <CreateLink from="Angular" />
        </p>
      </header>
      <SocialLinks />
    </div>
  </div>
)
