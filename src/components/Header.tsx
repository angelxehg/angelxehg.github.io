import React from "react"
import Container from "react-bootstrap/Container"

import "./Header.scss"

import IconLink from "./Link"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import socialLinks from "../meta/links/social"

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
            <IconLink meta={link} />
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <Container className="huge-header mt-3">
      <img
        src="/images/Profile.500.Sqr.jpg"
        className="rounded-circle fluid align-self-center"
        alt="Foto de perfil de Angel"
        style={{ height: "120px", width: "120px" }}
      />
      <header>
        <h1>{site.title}</h1>
        <p>{site.description}</p>
      </header>
      <nav>
        <ul>
          {socialLinks.map(link => (
            <li key={link.href}>
              <IconLink meta={link} />
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default Header
