import React from "react"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from '@material-ui/core/Typography'

const GatsbyLink = () => (
  <Link href="https://www.gatsbyjs.com/" rel="noopener" target="_blank" title="Gatsby">
    Gatsby
  </Link>
)

const MaterialUILink = () => (
  <Link href="https://material-ui.com/" rel="noopener" target="_blank" title="Material UI">
    Material UI
  </Link>
)

const FontAwesomeLink = () => (
  <Link href="https://fontawesome.com/license" rel="noopener" target="_blank" title="FontAwesome">
    FontAwesome
  </Link>
)

const BootstrapIconsLink = () => (
  <Link href="https://icons.getbootstrap.com/" rel="noopener" target="_blank" title="Bootstrap Icons">
    Bootstrap Icons
  </Link>
)

const SeekLogoLink = () => (
  <Link href="https://seeklogo.com/" rel="noopener" target="_blank" title="SeekLogo">
    SeekLogo
  </Link>
)

const IoniconsLink = () => (
  <Link href="https://ionicons.com/" rel="noopener" target="_blank" title="Ionicons">
    Ionicons
  </Link>
)

const IconifyLink = () => (
  <Link href="https://iconify.design/" rel="noopener" target="_blank" title="Iconify">
    Iconify
  </Link>
)

const IssuesPageLink = () => (
  <Link href="https://github.com/angelxehg/angelxehg.github.io/issues" rel="noopener" target="_blank" title="Issues en GitHub">
    página de Issues
  </Link>
)

const VersionLink = () => (
  <Link href="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.1" rel="noopener" target="_blank" title="GitHub repository">
    v2.0.0-beta.1
  </Link>
)

const DefaultFooter = (): JSX.Element => (
  <Box component="footer">
    <Typography variant="body1" color="textSecondary">
      © {new Date().getFullYear()}, Angel Hurtado. Portafolio profesional creado con <GatsbyLink /> y <MaterialUILink />.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Las marcas y logotipos presentados en este sitio web pertenecen a sus respectivos dueños. Los iconos fueron obtenidos desde <FontAwesomeLink />, <BootstrapIconsLink />, <SeekLogoLink />, <IoniconsLink />, y <IconifyLink />.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Reporta problemas o envia tus sugerencias a la <IssuesPageLink />. Versión del sitio web: <VersionLink />
    </Typography>
  </Box>
)

export default DefaultFooter
