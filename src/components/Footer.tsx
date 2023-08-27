import React from "react"

const DefaultFooter = (): JSX.Element => (
  <footer className="navbar bg-body-secondary">
    <div className="container-lg ps-sm-4 pe-sm-4" style={{ display: "block" }}>
      <p className="navbar-text m-0">
        Angel Hurtado © {new Date().getFullYear()}. Actualizado el 27 agosto de
        2023. Reporta problemas o envía tus sugerencias en{" "}
        <a
          href="https://github.com/angelxehg/angelxehg.github.io/issues"
          rel="external"
          title="Issues"
        >
          Issues
        </a>
      </p>
      <p className="navbar-text m-0">
        Las marcas y logotipos presentados en este sitio web pertenecen a sus
        respectivos dueños
      </p>
    </div>
  </footer>
)

export default DefaultFooter
