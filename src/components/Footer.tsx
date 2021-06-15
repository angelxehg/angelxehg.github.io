import React from "react"
import Container from "react-bootstrap/Container"
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
  <Navbar as="footer" variant="dark" bg="dark" className="mt-3">
    <Container style={{ display: "block" }}>
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
    </Container>
  </Navbar>
)

export default DefaultFooter
