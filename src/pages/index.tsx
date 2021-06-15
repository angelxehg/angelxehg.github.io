import React from "react"
import Link from "@material-ui/core/Link"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SEO from "../components/SEO"
import Layout from "../layouts/Layout";
import HugeHeader from "../components/HugeHeader";
import DefaultFooter from "../components/Footer";
import { usePages } from "../hooks/use-pages"
import { availableIcons, Icon } from "../components/icons"
import stacks from "../meta/stacks"
import { ProjectCard } from "./projects"

const AboutSection = () => (
  <section id="about">
    <Typography component="h2" variant="h5">
      Acerca de mi:
    </Typography>
    <Grid container spacing={1}>
      <Grid item xl={12}>
        <Card>
          <CardContent>
            <Typography component="h3" variant="h5">
              Educación
            </Typography>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                Ingeniería en Tecnologías de la Información y Comunicación{" "}
                <br />@
                <a href="http://www.utzac.edu.mx" rel="noopener" target="_blank" title="UTZAC">
                  UTZAC
                </a>{" "}
                2017-2021
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={12}>
        <Card>
          <CardContent>
            <Typography component="h3" variant="h5">
              Enlaces
            </Typography>
            <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
              <li>
                <a href="mailto:sudo@angelxehg.com" title="Email" rel="noopener" target="_blank">
                  <Icon name="Email" className="me-2" />
                  sudo@angelxehg.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </section>
)

const ProjectsSection = () => {
  const projects = usePages().slice(0, 2)
  return (
    <section id="projects">
      <Typography component="h2" variant="h5">
        Últimos <Link href="/projects">proyectos</Link>:
      </Typography>
      <Grid container spacing={1}>
        {projects.map(item => (
          <Grid key={item.id} item lg={4} md={6} xs={12}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Link href="/projects">Ver todos los proyectos {">"}</Link>
    </section>
  )
}

const SkillCard = (props: { title: string, icons: string[] }) => (
  <Card>
    <CardContent>
      <Typography component="h3" variant="h5">
        {props.title}
      </Typography>
      <Typography>
        {props.icons.map(icon => {
          if (availableIcons.find(i => i === icon)) {
            return (
              <span key={icon}>
                <Icon name={icon} /> {icon}
              </span>
            )
          }
        })}
      </Typography>
    </CardContent>
  </Card>
)

const SkillsSection = () => (
  <section id="skills" className="mt-2">
    <Typography component="h2" variant="h5">
      Habilidades
    </Typography>
    <Grid container spacing={1}>
      {stacks.map(({ title, icons }, n) => (
        <Grid key={n} item lg={4} md={6} xs={12}>
          <SkillCard title={title} icons={icons} />
        </Grid>
      ))}
    </Grid>
  </section>
)

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <HugeHeader />
    <Container component="main">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </Container>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
