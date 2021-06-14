import React from "react"
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography';

import "./HugeHeader.scss"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <Box mt={2} className="huge-header">
      <Avatar alt="Foto de perfil de Angel" src="/images/Profile.500.Sqr.jpg" className="huge-header-avatar" />
      <Box component="header" mt={1}>
        <Typography component="h1" variant="h4">
          {site.title}
        </Typography>
        <p>
          {site.description}
        </p>
      </Box>
    </Box>
  )
}

export default HugeHeader;
