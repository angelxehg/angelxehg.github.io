import React, { useState, useEffect } from "react"

import "./Header.scss"

import IconLink, { ClickableIcon } from "./Link"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import socialLinks from "../meta/links/social"

const SmileSVG = require("../assets/smile.svg")

const SocialLinks = () => (
  <nav>
    <p className="d-none d-sm-block">
      {socialLinks.map(link => (
        <ClickableIcon
          key={link.href}
          meta={link}
          iconProps={{ size: "1.5rem" }}
        />
      ))}
    </p>
    <ul className="p-0 m-0 d-sm-none" style={{ listStyleType: "none" }}>
      {socialLinks.map(link => (
        <li key={link.href}>
          <IconLink meta={link} />
        </li>
      ))}
    </ul>
  </nav>
)

export const HugeHeader = (): JSX.Element => {
  const [svgMode, setSvgMode] = useState(true)
  const site = useSiteMetadata()
  useEffect(() => {
    setTimeout(() => setSvgMode(false), 1000)
  }, [])
  return (
    <div className="bg-inter-background">
      <div className="container-xl ps-sm-4 pe-sm-4 huge-header pt-3 pb-2">
        <button onClick={() => setSvgMode(!svgMode)} style={{border: 'none', background: 'none'}}>
          {!svgMode && <img
            src="/images/Profile.500.Sqr.jpg"
            className="rounded-circle fluid align-self-center"
            alt="Foto de perfil de Angel"
            style={{ height: "120px", width: "120px" }}
          />}
          {svgMode && <SmileSVG
            style={{ height: "120px", width: "120px" }}
            className="align-self-center"
          />}
        </button>
        <header className="mt-2">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </header>
        <SocialLinks />
      </div>
    </div>
  )
}
