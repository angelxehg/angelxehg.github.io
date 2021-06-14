import React from "react"
import Container from "@material-ui/core/Container"

import SEO from "../components/SEO"
import Layout from "../layouts/Layout";
import HugeHeader from "../components/HugeHeader";
import DefaultFooter from "../components/Footer";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Portafolio" lang="es" />
    <HugeHeader />
    <Container component="main">
      Hola mundo
    </Container>
    <DefaultFooter />
  </Layout>
)

export default IndexPage
