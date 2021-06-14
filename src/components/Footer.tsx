import React from "react"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from '@material-ui/core/Typography'

const DefaultFooter = (): JSX.Element => (
  <Box component="footer" maxWidth="sm">
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()}, Angel Hurtado. Portafolio profesional creado con <Link href="https://www.gatsbyjs.com/" rel="noopener" target="_blank" title="Gatsby">
        Gatsby
      </Link> y <Link href="https://material-ui.com/" rel="noopener" target="_blank" title="Material UI">
        Material UI
      </Link>. Las marcas y logotipos pertenecen a sus respectivos dueños. Iconos
      obtenidos desde{" "}
      <Link href="https://fontawesome.com/license" rel="noopener" target="_blank" title="FontAwesome">
        FontAwesome
      </Link>
      {", "}
      <Link href="https://icons.getbootstrap.com/" rel="noopener" target="_blank" title="Bootstrap Icons">
        Bootstrap Icons
      </Link>
      {", "}
      <Link href="https://seeklogo.com/" rel="noopener" target="_blank" title="SeekLogo">
        SeekLogo
      </Link>
      {", "}
      <Link href="https://ionicons.com/" rel="noopener" target="_blank" title="Ionicons">
        Ionicons
      </Link>
      {", y "}
      <Link href="https://iconify.design/" rel="noopener" target="_blank" title="Iconify">
        Iconify
      </Link>. Reporta problemas o envia tus sugerencias a la{" "}
      <Link href="https://github.com/angelxehg/angelxehg.github.io/issues" rel="noopener" target="_blank" title="Issues en GitHub">
        página de Issues
      </Link>. Versión del sitio web:{" "}
      <Link href="https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.0-beta.1" rel="noopener" target="_blank" title="GitHub repository">
        v2.0.0-beta.1
      </Link>
    </Typography>
  </Box>
)

export default DefaultFooter
