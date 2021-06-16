import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages, Page } from "../hooks/use-pages"
import { getLinkMeta } from "../meta/links"
import IconLink from "../components/Link"
import DefaultNavbar from "../components/Navbar"

interface ProjectCardProps {
  item: Page
}

export const ProjectCard = (
  props: ProjectCardProps & { titleAs?: "h2" | "h3" }
): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <Card bg="dark" text="light" as="article">
      <GatsbyImage image={image} alt={caption} className="card-img-top" />
      <Card.Body>
        <Card.Title as={props.titleAs || "h2"} className="h5">
          <Link to={`/${slug}`}>{title}</Link>
        </Card.Title>
        <Card.Text className="m-0">{resume}</Card.Text>
        <Card.Text className="mt-1">
          Hecho con{": "}
          {stackIcons.map(toolName => {
            const link = getLinkMeta(toolName)
            return (
              <Badge
                key={toolName}
                pill
                bg="dark"
                text="light"
                className="mt-1 me-1"
              >
                <IconLink noUnderline meta={link} />
              </Badge>
            )
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <DefaultNavbar />
      <div className="bg-inter-background">
        <header className="container-xl ps-sm-4 pe-sm-4 pt-3 pb-1">
          <h1>Todos mis proyectos</h1>
          <p>Estos son todos mis proyectos públicos</p>
        </header>
      </div>
      <main className="container-xl ps-sm-4 pe-sm-4 pt-3 pb-3">
        <div className="row">
          {projects.map(item => (
            <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </main>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
