import React from "react"

import { CreateLink } from "./Link"

const repoVer = {
  title: "v2.0.3",
  href: "https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.3",
}

const issueLink = {
  title: "Issues",
  href: "https://github.com/angelxehg/angelxehg.github.io/issues",
}

const DefaultFooter = (): JSX.Element => (
  <footer className="navbar">
    <div className="container-lg ps-sm-4 pe-sm-4" style={{ display: "block" }}>
      <p className="navbar-text m-0">
        © {new Date().getFullYear()}, Angel Hurtado @{" "}
        <CreateLink from="GitHub" extend={repoVer} />. Portafolio profesional
        creado con <CreateLink from="GatsbyJS" /> y{" "}
        <CreateLink from="Bootstrap" />. Reporta problemas o envía tus
        sugerencias a la página <CreateLink from="GitHub" extend={issueLink} />
      </p>
      <p className="navbar-text m-0">
        Las marcas y logotipos presentados en este sitio web pertenecen a sus
        respectivos dueños. Iconos de <CreateLink from="FontAwesome" />
      </p>
    </div>
  </footer>
)

export default DefaultFooter
