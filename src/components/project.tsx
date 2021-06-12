import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

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
    <Card bg="dark" text="light" as="article">
      <Row>
        {!props.noImage && (
          <Col xl="3" md="4">
            <GatsbyImage
              className="card-img-top img-200"
              image={image}
              alt={caption}
            />
          </Col>
        )}
        <Col md>
          <Card.Body>
            <Card.Title>
              <Link to={`/${slug}`}>{title}</Link>
            </Card.Title>
            <Card.Text className="m-0">{resume}</Card.Text>
            <Card.Text className="mt-1">
              {stackIcons.map(icon => (
                <Badge
                  key={icon}
                  pill
                  bg="dark"
                  text="light"
                  className="mt-1 me-1"
                >
                  <Icon name={icon} /> {icon}
                </Badge>
              ))}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
