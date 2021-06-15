import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from "@material-ui/core/Link"
import Typography from '@material-ui/core/Typography';

import { Icon } from "./icons"
import { Page } from "../models"

interface ProjectCardProps {
  item: Page
  noImage?: boolean
}

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { slug, title, resume, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <Card component="article">
      <CardContent>
        <GatsbyImage
          as={CardMedia}
          image={image}
          alt={caption}
        />
        <Typography component="h2" variant="h5">
          <Link href={`/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {resume}
        </Typography>
        <Typography>
          {stackIcons.map(icon => (
            <span key={icon}>
              <Icon name={icon} /> {icon}
            </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
