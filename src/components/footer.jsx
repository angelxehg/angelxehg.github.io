import React from "react"

import { LinkExternal } from "@components/social"
import { Container } from "react-bootstrap"

const DefaultFooter = () => (
  <footer className="navbar navbar-dark">
    <Container fluid="md">
      <p>
        <b>© {new Date().getFullYear()}, Angel Hurtado.</b> Versión v1.2.0.
          Las marcas y logos pertenecen a sus respectivos dueños. Iconos
          obtenidos desde{" "}
        <LinkExternal to="https://fontawesome.com/license">
          FontAwesome
          </LinkExternal>
        {", "}
        <LinkExternal to="https://icons.getbootstrap.com/">
          Bootstrap Icons
          </LinkExternal>
        {", "}
        <LinkExternal to="https://seeklogo.com/">SeekLogo</LinkExternal>
        {", "}
        <LinkExternal to="https://ionicons.com/">Ionicons</LinkExternal>
      </p>
    </Container>
  </footer>
)

export default DefaultFooter
