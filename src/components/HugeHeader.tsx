import React from "react"
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from '@material-ui/core/Typography';

import "./HugeHeader.scss"

import { Icon } from "./icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { resumeLink, devToLink, linkedInLink, payPalLink, gitHubLink, gitLabLink, twitterLink, instagramLink } from "./social"

const socialLinks = [
  resumeLink,
  devToLink,
  linkedInLink,
  payPalLink,
  gitHubLink,
  gitLabLink,
  twitterLink,
  instagramLink,
]

const HugeHeader = (): JSX.Element => {
  const site = useSiteMetadata()
  return (
    <Box mt={2} className="huge-header">
      <Avatar alt="Foto de perfil de Angel" src="/images/Profile.500.Sqr.jpg" className="huge-header-avatar" />
      <Box component="header" mt={1}>
        <Typography component="h1" variant="h4">
          {site.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {site.description}
        </Typography>
      </Box>
      <Box component="nav" mt={1}>
        {socialLinks.map(link => (
          <Link key={link.to} href={link.to} title={link.title} rel="noopener" target="_blank">
            <Icon name={link.icon} size="1.5rem" />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default HugeHeader;
