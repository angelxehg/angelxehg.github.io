import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

import CenterLayout from "../layouts/Center"
import SEO from "./SEO"

interface RedirectProps {
  title: string
  url: string
}

const ConcernedSVG = require("../assets/concerned.svg")

const Redirect = (props: RedirectProps): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigate(props.url), 2000)
  }, [])
  return (
    <CenterLayout>
      <SEO title="301: Moved Permanently" lang="es" />
      <Card>
        <CardContent>
          <ConcernedSVG style={{ width: "5rem", height: "5rem" }} />
          <Typography component="h1" variant="h5">
            301: Moved Permanently
          </Typography>
          <Typography variant="body1" gutterBottom>
            Este contenido fue movido a{" "}
            <Link href={props.url}>{props.title}</Link>. Redireccionando...
          </Typography>
        </CardContent>
      </Card>
    </CenterLayout>
  )
}

export default Redirect
