import React, { useEffect } from "react"
import { navigate } from "gatsby"

import CenterLayout from "../layouts/center"
import SEO from "../components/seo"
import { LinkExternal } from "../components/social"

const ConcernedSVG = require("../assets/concerned.svg")

const PostsPage = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigate("https://dev.to/angelxehg.com"), 2000)
  }, [])
  return (
    <CenterLayout>
      <SEO title="301: Moved Permanently" lang="es" />
      <div className="card bg-dark">
        <ConcernedSVG
          style={{ width: "5rem", height: "5rem" }}
          className="align-self-center mt-2"
        />
        <div className="card-body">
          <h1 className="h3 card-title">301: Moved Permanently</h1>
          <p className="card-text m-0">
            Moví mi blog a <LinkExternal to="https://dev.to/angelxehg.com">dev.to</LinkExternal>
          </p>
        </div>
      </div>
    </CenterLayout>
  )
}

export default PostsPage
