import React from "react"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import DefaultFooter from "../components/Footer"
import DefaultNavbar from "../components/Navbar"

const SmileSVG = require("../assets/smile.svg")
const EnvelopeFillSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")

import { AboutSection } from "./about"
import { SkillsSection } from "./skills"
import { ProjectsSection } from "./projects"
import { PostsSection } from "./posts"

const EmailIconLink = (): JSX.Element => (
  <a href="mailto:angelxehg@pm.me" rel="external" title="Send email to Angel">
    <EnvelopeFillSVG style={{ marginRight: '4px' }} />
    angelxehg@pm.me
  </a>
)

const LinkedInIconLink = (): JSX.Element => (
  <a href="https://www.linkedin.com/in/angelxehg" rel="external" title="LinkedIn (/in/angelxehg)">
    <LinkedInSVG style={{ marginRight: '4px' }} />
    LinkedIn (/in/angelxehg)
  </a>
)

const GitHubIconLink = (): JSX.Element => (
  <a href="https://github.com/angelxehg" rel="external" title="Send email to Angel">
    <GitHubSVG style={{ marginRight: '4px' }} />
    GitHub (@angelxehg)
  </a>
)

const TwitterIconLink = (): JSX.Element => (
  <a href="https://www.twitter.com/angelxehg" rel="external" title="Send email to Angel">
    <TwitterSVG style={{ marginRight: '4px' }} />
    Twitter (@angelxehg)
  </a>
)

const SocialLinks = () => (
  <nav>
    <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
      <li>
        <EmailIconLink />
      </li>
      <li>
        <LinkedInIconLink/>
      </li>
      <li>
        <GitHubIconLink/>
      </li>
      <li>
        <TwitterIconLink/>
      </li>
    </ul>
  </nav>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <Hero>
      <SmileSVG
        className="rounded-circle fluid align-self-center"
        alt="Avatar de Angel"
        style={{ height: "120px", width: "120px", background: "blueviolet" }}
      />
      <header className="mt-2">
        <h1>Angel Hurtado</h1>
        <p>¡Hola mundo! Hago web development con Angular, TypeScript y React</p>
      </header>
      <SocialLinks />
    </Hero>
    <main className="container-lg ps-sm-4 pe-sm-4 pb-3">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PostsSection />
    </main>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
