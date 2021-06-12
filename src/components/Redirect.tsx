import React, { useEffect } from "react";
import { navigate } from "gatsby"

import CenterLayout from "../layouts/center";
import { LinkExternal } from "./social";
import SEO from "./seo";

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
      <div className="card">
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <div className="card-body">
          <h1 className="h3 card-title">301: Moved Permanently</h1>
          <p className="card-text m-0">
            Redireccionando a <LinkExternal to={props.url}>{props.title}</LinkExternal>...
          </p>
        </div>
      </div>
    </CenterLayout>
  )
}

export default Redirect
