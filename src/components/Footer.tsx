import React from "react"

import { CreateLink } from "./Link"
import { useTheme } from "./Theme"

const repoVer = {
  title: "v2.0.0",
  href: "https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0",
}

const issueLink = {
  title: "Issues",
  href: "https://github.com/angelxehg/angelxehg.github.io/issues",
}

const DefaultFooter = (): JSX.Element => {
  const { theme } = useTheme()
  return (
    <footer className={`navbar navbar-${theme.name} ${theme.bgClass}`}>
      <div
        className="container-sm ps-sm-4 pe-sm-4"
        style={{ display: "block" }}
      >
        <p className="navbar-text m-0">
          © {new Date().getFullYear()}, Angel Hurtado @{" "}
          <CreateLink from="GitHub" extend={repoVer} reset />. Portafolio
          profesional creado con <CreateLink from="Gatsby" reset /> y{" "}
          <CreateLink from="Bootstrap" reset />. Reporta problemas o envia tus
          sugerencias a la página{" "}
          <CreateLink from="GitHub" extend={issueLink} reset />
        </p>
        <p className="navbar-text m-0">
          Las marcas y logotipos presentados en este sitio web pertenecen a sus
          respectivos dueños. Iconos de <CreateLink from="Font Awesome" reset />
        </p>
      </div>
    </footer>
  )
}

export default DefaultFooter
