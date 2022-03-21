import React from "react"

import "./Header.scss"

const socialLinks = [
  {
    title: "Enviame un Email",
    href: "mailto:angelxehg@pm.me",
  },
  {
    title: "Descarga mi CV",
    href: "/cv-es.pdf",
  },
  {
    title: 'Mis diplomas',
    href: 'https://platzi.com/p/angelxehg'
  },
  {
    title: "Visita mi blog en dev.to",
    href: "https://dev.to/angelxehg",
  },
  {
    title: "LinkedIn (/in/angelxehg)",
    href: "https://www.linkedin.com/in/angelxehg",
  },
  {
    title: "GitHub (@angelxehg)",
    href: "https://github.com/angelxehg",
  },
  {
    title: "Twitter (@angelxehg)",
    href: "https://www.twitter.com/angelxehg",
  },
]

const SocialLinks = () => (
  <nav>
    <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
      {socialLinks.map(({ title, href }) => (
        <li key={href}>
          <a href={href} rel="external" title={title}>{title}</a>
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
          ¡Hola mundo! Hago web development con Angular, TypeScript y React
        </p>
      </header>
      <SocialLinks />
    </div>
  </div>
)
