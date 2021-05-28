import React from "react"

import { LinkExternal } from "./social"

const DefaultFooter = (): JSX.Element => (
  <footer className="navbar navbar-dark bg-dark">
    <div className="container-xl ps-md-4 pe-md-4">
      <span className="navbar-text">
        <b>© {new Date().getFullYear()}, Angel Hurtado.</b> Versión v1.7.2. Las
        marcas y logotipos pertenecen a sus respectivos dueños. Iconos obtenidos
        desde{" "}
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
    </div>
  </footer>
)

export default DefaultFooter
