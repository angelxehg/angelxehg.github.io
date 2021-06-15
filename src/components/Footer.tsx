import React from "react"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

const GatsbyLink = () => (
  <Link href="https://www.gatsbyjs.com/" rel="external" title="Gatsby">
    Gatsby
  </Link>
)

const MaterialUILink = () => (
  <Link href="https://material-ui.com/" rel="external" title="Material UI">
    Material UI
  </Link>
)

const FontAwesomeLink = () => (
  <Link
    href="https://fontawesome.com/license"
    rel="external"
    title="FontAwesome"
  >
    FontAwesome
  </Link>
)

const BootstrapIconsLink = () => (
  <Link
    href="https://icons.getbootstrap.com/"
    rel="external"
    title="Bootstrap Icons"
  >
    Bootstrap Icons
  </Link>
)

const SeekLogoLink = () => (
  <Link href="https://seeklogo.com/" rel="external" title="SeekLogo">
    SeekLogo
  </Link>
)

const IoniconsLink = () => (
  <Link href="https://ionicons.com/" rel="external" title="Ionicons">
    Ionicons
  </Link>
)

const IconifyLink = () => (
  <Link href="https://iconify.design/" rel="external" title="Iconify">
    Iconify
  </Link>
)

const IssuesPageLink = () => (
  <Link
    href="https://github.com/angelxehg/angelxehg.github.io/issues"
    rel="external"
    title="Issues en GitHub"
  >
    página de Issues
  </Link>
)

const VersionLink = () => (
  <Link
    href="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.2"
    rel="external"
    title="GitHub repository"
  >
    v2.0.0-beta.2
  </Link>
)

const DefaultFooter = (): JSX.Element => (
  <Container component="footer">
    <Typography variant="body1" color="textSecondary">
      © {new Date().getFullYear()}, Angel Hurtado. Portafolio profesional creado
      con <GatsbyLink /> y <MaterialUILink />.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Las marcas y logotipos presentados en este sitio web pertenecen a sus
      respectivos dueños. Los iconos fueron obtenidos desde <FontAwesomeLink />,{" "}
      <BootstrapIconsLink />, <SeekLogoLink />, <IoniconsLink />, y{" "}
      <IconifyLink />.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Reporta problemas o envia tus sugerencias a la <IssuesPageLink />. Versión
      del sitio web: <VersionLink />
    </Typography>
  </Container>
)

export default DefaultFooter
