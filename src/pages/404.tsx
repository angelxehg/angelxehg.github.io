import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

import CenterLayout from "../layouts/Center"
import SEO from "../components/SEO"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <Card>
      <CardContent>
        <ConcernedSVG style={{ width: "5rem", height: "5rem" }} />
        <Typography component="h1" variant="h5">
          404 Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          La página que buscas no existe
        </Typography>
        <Typography>
          <Link href="/">Ir a página principal</Link>
        </Typography>
      </CardContent>
    </Card>
  </CenterLayout>
)

export default NotFoundPage
