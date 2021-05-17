import React from "react"

import { LinkExternal } from "./social"

const DefaultFooter = (): JSX.Element => (
  <footer className="navbar navbar-dark">
    <div className="container-xl ps-md-4 pe-md-4">
      <p>
        <b>© {new Date().getFullYear()}, Angel Hurtado.</b> Versión v1.6.0. Las
        marcas y logos pertenecen a sus respectivos dueños. Iconos obtenidos
        desde{" "}
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
        {". "}
        Reporta problemas o envia tus sugerencias a la{" "}
        <LinkExternal to="https://github.com/angelxehg/angelxehg.github.io/issues">
          página de Issues
        </LinkExternal>
      </p>
    </div>
  </footer>
)

export default DefaultFooter
