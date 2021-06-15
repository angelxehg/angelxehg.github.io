import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages } from "../hooks/use-pages"
import { Icon } from "../components/icons"
import { Page } from "../models"

interface ProjectCardProps {
  item: Page
}

export const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <Card component="article">
      <CardContent>
        <GatsbyImage as={CardMedia} image={image} alt={caption} />
        <Typography component="h3" variant="h5">
          <Link href={`/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {resume}
        </Typography>
        <Typography>
          {stackIcons.map(icon => (
            <span key={icon}>
              <Icon name={icon} /> {icon}
            </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <Container component="main">
        <Typography component="h1" variant="h4">
          Todos mis proyectos
        </Typography>
        <Typography>Estos son todos mis proyectos públicos</Typography>
        <Grid container spacing={1}>
          {projects.map(item => (
            <Grid key={item.id} item lg={4} md={6} xs={12}>
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <DefaultFooter />
    </Layout>
  )
}

export default ProjectsPage
