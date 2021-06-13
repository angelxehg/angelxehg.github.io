import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

import { LinkExternal } from "./social"

const DefaultFooter = (): JSX.Element => (
  <Navbar as="footer" variant="dark">
    <Container fluid="xl" className="ps-md-4 pe-md-4">
      <span className="navbar-text">
        <b>© {new Date().getFullYear()}, Angel Hurtado.</b> Versión{" "}
        <LinkExternal
          to="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.1"
          className="text-reset"
        >
          v2.0.0-beta.1
        </LinkExternal>
        . Las marcas y logotipos pertenecen a sus respectivos dueños. Iconos
        obtenidos desde{" "}
        <LinkExternal
          to="https://fontawesome.com/license"
          className="text-reset"
        >
          FontAwesome
        </LinkExternal>
        {", "}
        <LinkExternal
          to="https://icons.getbootstrap.com/"
          className="text-reset"
        >
          Bootstrap Icons
        </LinkExternal>
        {", "}
        <LinkExternal to="https://seeklogo.com/" className="text-reset">
          SeekLogo
        </LinkExternal>
        {", "}
        <LinkExternal to="https://ionicons.com/" className="text-reset">
          Ionicons
        </LinkExternal>
        {", y "}
        <LinkExternal to="https://iconify.design/" className="text-reset">
          Iconify
        </LinkExternal>
        {", "}
        Reporta problemas o envia tus sugerencias a la{" "}
        <LinkExternal
          to="https://github.com/angelxehg/angelxehg.github.io/issues"
          className="text-reset"
        >
          página de Issues
        </LinkExternal>
      </span>
    </Container>
  </Navbar>
)

export default DefaultFooter
