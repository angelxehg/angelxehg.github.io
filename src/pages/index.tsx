import React from "react"
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';

import SEO from "../components/seo"
import Layout from "../layouts/layout";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <Container>
      <Typography component="h1" variant="h4">
        Angel Hurtado
      </Typography>
    </Container>
  </Layout>
)

export default IndexPage
