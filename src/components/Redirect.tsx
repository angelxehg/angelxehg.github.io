import React, { useEffect } from "react"
import { navigate } from "gatsby"

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
      <main>
        <div>
          <ConcernedSVG style={{ width: "5rem", height: "5rem" }} />
          <h1>301: Moved Permanently</h1>
          <p>
            Este contenido fue movido a <a href={props.url}>{props.title}</a>.
            Redireccionando...
          </p>
        </div>
      </main>
    </CenterLayout>
  )
}

export default Redirect
