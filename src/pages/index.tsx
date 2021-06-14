import React from "react"
import Container from "@material-ui/core/Container"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout";
import HugeHeader from "../components/HugeHeader";
import DefaultFooter from "../components/Footer";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <Container>
      <HugeHeader />
      <DefaultFooter/>
    </Container>
  </Layout>
)

export default IndexPage
