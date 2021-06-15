import React from "react"

import CenterLayout from "../layouts/Center"
import SEO from "../components/SEO"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => (
  <CenterLayout>
    <SEO title="404: Not found" lang="es" />
    <main>
      <div>
        <ConcernedSVG style={{ width: "5rem", height: "5rem" }} />
        <h1>404 Not Found</h1>
        <p>
          La página que buscas no existe. <a href="/">Ir a página principal</a>
        </p>
      </div>
    </main>
  </CenterLayout>
)

export default NotFoundPage
