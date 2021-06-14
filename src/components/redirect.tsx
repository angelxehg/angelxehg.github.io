import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Card from "react-bootstrap/Card"

import CenterLayout from "../layouts/center"
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
      <Card bg="dark" text="light">
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <Card.Body>
          <Card.Title>301: Moved Permanently</Card.Title>
          <Card.Text className="m-0">
            Redireccionando a{" "}
            <a href={props.url} rel="noopener" target="_blank">
              {props.title}
            </a>...
          </Card.Text>
        </Card.Body>
      </Card>
    </CenterLayout>
  )
}

export default Redirect
