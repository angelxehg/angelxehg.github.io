import React from "react"
import Navbar from "react-bootstrap/Navbar"

import IconLink from "./Link"
import {
  bootstrapLinkMeta,
  fasLinkMeta,
  gatsbyLinkMeta,
  gitHubIssues,
  gitHubRepoVer,
} from "../meta/links"

const DefaultFooter = (): JSX.Element => (
  <Navbar as="footer" variant="dark" bg="dark">
    <div className="container-xl ps-sm-4 pe-sm-4" style={{ display: "block" }}>
      <p className="navbar-text m-0">
        © {new Date().getFullYear()}, Angel Hurtado @{" "}
        <IconLink meta={gitHubRepoVer} reset />. Portafolio profesional creado
        con <IconLink meta={gatsbyLinkMeta} reset /> y{" "}
        <IconLink meta={bootstrapLinkMeta} reset />. Reporta problemas o envia
        tus sugerencias a la página <IconLink meta={gitHubIssues} reset />.
      </p>
      <p className="navbar-text m-0">
        Las marcas y logotipos presentados en este sitio web pertenecen a sus
        respectivos dueños. Iconos de <IconLink meta={fasLinkMeta} reset />
      </p>
    </div>
  </Navbar>
)

export default DefaultFooter
