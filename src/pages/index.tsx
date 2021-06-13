import React from "react"
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';

import SEO from "../components/seo"

const IndexPage = (): JSX.Element => (
  <div>
    <SEO title="Portafolio" lang="es" />
    <Container>
      <Typography component="h1" variant="h4">
        Angel Hurtado
      </Typography>
    </Container>
  </div>
)

export default IndexPage
