import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SEO from "@components/seo"
import { ProfileImage, LinkExternal, socialLinks } from "@components/social"
import { useSiteMetadata } from "@hooks/use-site-metadata"
import { LinkIcon, Icon } from "@components/icons"
import DefaultFooter from "@components/footer"
import DefaultNavbar from "@components/navbar"

const AboutPage = () => {
  const site = useSiteMetadata()
  const stacks = [
    {
      title: "Lenguajes",
      icons: ["HTML5", "CSS3", "Typescript", "Javascript", "Python"],
    },
    {
      title: "Frameworks",
      icons: ["React", "Ionic", "Gatsby", "Angular"],
    },
    {
      title: "Herramientas",
      icons: ["NodeJS", "NPM", "Git", "Markdown", "Bootstrap"],
    },
    {
      title: "Plataformas",
      icons: ["Ubuntu", "Netlify", "AWS", "Firebase", "DigitalOcean"],
    },
  ]
  return (
    <div>
      <SEO title="Acerca de mi" lang="es" />
      <DefaultNavbar />
      <Container fluid="sm" className="pt-3 pb-3">
        <header>
          <h1>Acerca de mi</h1>
          <p>{site.description}</p>
        </header>
      </Container>
      <DefaultFooter />
    </div>
  )
}

export default AboutPage
