import React from "react"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import DefaultFooter from "../components/Footer"
import DefaultNavbar from "../components/Navbar"

const EnvelopeFillSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")

import { AboutSection } from "./about"
import { SkillsSection } from "./skills"
import { ProjectsSection } from "./projects"
import { PostsSection } from "./posts"

const EmailIconLink = (): JSX.Element => (
  <a
    href="mailto:angelxehg@proton.me"
    rel="external"
    title="Send email to Angel"
    style={{ textDecoration: "none" }}
  >
    <EnvelopeFillSVG style={{ marginRight: "4px" }} />
    angelxehg@proton.me
  </a>
)

const LinkedInIconLink = (): JSX.Element => (
  <a
    href="https://www.linkedin.com/in/angelxehg"
    rel="external"
    title="LinkedIn (/in/angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <LinkedInSVG style={{ marginRight: "4px" }} />
    LinkedIn (/in/angelxehg)
  </a>
)

const GitHubIconLink = (): JSX.Element => (
  <a
    href="https://github.com/angelxehg"
    rel="external"
    title="GitHub (@angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <GitHubSVG style={{ marginRight: "4px" }} />
    GitHub (@angelxehg)
  </a>
)

const TwitterIconLink = (): JSX.Element => (
  <a
    href="https://www.twitter.com/angelxehg"
    rel="external"
    title="Twitter (@angelxehg)"
    style={{ textDecoration: "none" }}
  >
    <TwitterSVG style={{ marginRight: "4px" }} />
    Twitter (@angelxehg)
  </a>
)

const SocialLinks = () => (
  <nav>
    <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
      <li style={{ marginBottom: "4px" }}>
        <EmailIconLink />
      </li>
      <li style={{ marginBottom: "4px" }}>
        <LinkedInIconLink />
      </li>
      <li style={{ marginBottom: "4px" }}>
        <GitHubIconLink />
      </li>
      <li style={{ marginBottom: "4px" }}>
        <TwitterIconLink />
      </li>
    </ul>
  </nav>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <Hero>
      <img
        src="images/2022-10-23-Small-Compress.png"
        className="rounded-circle fluid align-self-center"
        alt="Avatar de Angel"
        style={{ height: "150px", width: "150px" }}
      />
      <header className="mt-2">
        <h1>Angel Hurtado</h1>
        <p>Backend Web Developer</p>
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
