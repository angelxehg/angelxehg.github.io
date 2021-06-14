import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

const DefaultFooter = (): JSX.Element => (
  <Navbar as="footer" variant="dark">
    <Container fluid="xl" className="ps-md-4 pe-md-4">
      <span className="navbar-text">
        <b>© {new Date().getFullYear()}, Angel Hurtado.</b> Versión{" "}
        <a href="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.1" rel="noopener" target="_blank" title="GitHub repository">
          v2.0.0-beta.1
        </a>
        . Las marcas y logotipos pertenecen a sus respectivos dueños. Iconos
        obtenidos desde{" "}
        <a href="https://fontawesome.com/license" rel="noopener" target="_blank" title="FontAwesome">
          FontAwesome
        </a>
        {", "}
        <a href="https://icons.getbootstrap.com/" rel="noopener" target="_blank" title="Bootstrap Icons">
          Bootstrap Icons
        </a>
        {", "}
        <a href="https://seeklogo.com/" rel="noopener" target="_blank" title="SeekLogo">
          SeekLogo
        </a>
        {", "}
        <a href="https://ionicons.com/" rel="noopener" target="_blank" title="Ionicons">
          Ionicons
        </a>
        {", y "}
        <a href="https://iconify.design/" rel="noopener" target="_blank" title="Iconify">
          Iconify
        </a>
        {", "}
        Reporta problemas o envia tus sugerencias a la{" "}
        <a href="https://github.com/angelxehg/angelxehg.github.io/issues" rel="noopener" target="_blank" title="Issues en GitHub">
          página de Issues
        </a>
      </span>
    </Container>
  </Navbar>
)

export default DefaultFooter
