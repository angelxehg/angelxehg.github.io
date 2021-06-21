import React from "react"
import { Link } from "gatsby"

import CenterLayout from "../layouts/Center"
import SEO from "../components/SEO"
import { useTheme } from "../components/Theme"

const ConcernedSVG = require("../assets/concerned.svg")

const NotFoundPage = (): JSX.Element => {
  const { theme } = useTheme()
  return (
    <CenterLayout>
      <SEO title="404: Not found" lang="es" />
      <main className="card">
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <div className="card-body">
          <h1 className="card-title h5">404 Not Found</h1>
          <p className="card-text m-0">
            La página que buscas no existe.{" "}
            <Link to="/">Ir a página principal</Link>
          </p>
        </div>
      </main>
    </CenterLayout>
  )
}

export default NotFoundPage
