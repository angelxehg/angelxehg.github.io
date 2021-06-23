import React from "react"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout"
import { HugeHeader } from "../components/Header"
import DefaultFooter from "../components/Footer"
import DefaultNavbar from "../components/Navbar"

import { AboutSection } from "./about"
import { SkillsSection } from "./skills"
import { ProjectsSection } from "./projects"
import { PostsSection } from "./posts"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <DefaultNavbar />
    <HugeHeader />
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
