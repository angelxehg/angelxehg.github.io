import React from "react"
import Container from "@material-ui/core/Container"

import SEO from "../components/SEO"
import Layout from "../layouts/layout";
import HugeHeader from "../components/HugeHeader";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <Container>
      <HugeHeader />
    </Container>
  </Layout>
)

export default IndexPage
