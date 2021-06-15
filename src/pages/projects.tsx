import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from "../layouts/Layout";
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { usePages } from "../hooks/use-pages"
import ProjectCard from "../components/project"

const ProjectsPage = (): JSX.Element => {
  const projects = usePages()
  return (
    <Layout>
      <SEO title="Portafolio" lang="es" />
      <Container component="main">
        <Typography component="h1" variant="h4">
          Todos mis proyectos
        </Typography>
        <Typography>
          Estos son todos mis proyectos públicos
        </Typography>
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
