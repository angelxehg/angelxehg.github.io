import React from "react"
import Container from "react-bootstrap/Container"

const GatsbyLink = () => (
  <a href="https://www.gatsbyjs.com/" rel="external" title="Gatsby">
    Gatsby
  </a>
)

const FontAwesomeLink = () => (
  <a href="https://fontawesome.com/license" rel="external" title="FontAwesome">
    FontAwesome
  </a>
)

const BootstrapIconsLink = () => (
  <a
    href="https://icons.getbootstrap.com/"
    rel="external"
    title="Bootstrap Icons"
  >
    Bootstrap Icons
  </a>
)

const SeekLogoLink = () => (
  <a href="https://seeklogo.com/" rel="external" title="SeekLogo">
    SeekLogo
  </a>
)

const IoniconsLink = () => (
  <a href="https://ionicons.com/" rel="external" title="Ionicons">
    Ionicons
  </a>
)

const IconifyLink = () => (
  <a href="https://iconify.design/" rel="external" title="Iconify">
    Iconify
  </a>
)

const IssuesPageLink = () => (
  <a
    href="https://github.com/angelxehg/angelxehg.github.io/issues"
    rel="external"
    title="Issues en GitHub"
  >
    página de Issues
  </a>
)

const VersionLink = () => (
  <a
    href="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.2"
    rel="external"
    title="GitHub repository"
  >
    v2.0.0-beta.2
  </a>
)

const DefaultFooter = (): JSX.Element => (
  <Container as="footer">
    <p>
      © {new Date().getFullYear()}, Angel Hurtado. Portafolio profesional creado
      con <GatsbyLink />.
    </p>
    <p>
      Las marcas y logotipos presentados en este sitio web pertenecen a sus
      respectivos dueños. Los iconos fueron obtenidos desde <FontAwesomeLink />,{" "}
      <BootstrapIconsLink />, <SeekLogoLink />, <IoniconsLink />, y{" "}
      <IconifyLink />.
    </p>
    <p>
      Reporta problemas o envia tus sugerencias a la <IssuesPageLink />. Versión
      del sitio web: <VersionLink />
    </p>
  </Container>
)

export default DefaultFooter
