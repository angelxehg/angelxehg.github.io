import React from "react"

import "./Header.css"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import socialLinks from "../meta/links"

const Header = (props: { title: string; description: string }): JSX.Element => (
  <div className="huge-header">
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
    <nav>
      <ul>
        {socialLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} title={link.name} rel="external">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <div className="huge-header">
      <img
        alt="Foto de perfil de Angel"
        src="/images/Profile.500.Sqr.jpg"
        className="huge-header-avatar"
      />
      <header>
        <h1>{site.title}</h1>
        <p>{site.description}</p>
      </header>
      <nav>
        <ul>
          {socialLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} title={link.name} rel="external">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
