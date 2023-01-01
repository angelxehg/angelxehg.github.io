import React from "react"

const DefaultFooter = (): JSX.Element => (
  <footer className="navbar">
    <div className="container-lg ps-sm-4 pe-sm-4" style={{ display: "block" }}>
      <p className="navbar-text m-0">
        Angel Hurtado © {new Date().getFullYear()}, Portafolio v2.2.0 | Creado
        con{" "}
        <a href="https://www.gatsbyjs.com/" rel="external" title="Gatsby">
          Gatsby
        </a>{" "}
        y{" "}
        <a
          href="https://getbootstrap.com/docs/"
          rel="external"
          title="Bootstrap"
        >
          Bootstrap
        </a>{" "}
        . Reporta problemas o envía tus sugerencias a la página{" "}
        <a
          href="https://github.com/angelxehg/angelxehg.github.io/issues"
          rel="external"
          title="Issues"
        >
          Issues
        </a>
        . Las marcas y logotipos presentados en este sitio web pertenecen a sus
        respectivos dueños
      </p>
    </div>
  </footer>
)

export default DefaultFooter
