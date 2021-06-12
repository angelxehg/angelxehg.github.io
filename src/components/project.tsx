import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Icon } from "./icons"
import { Page } from "../models"

interface ProjectCardProps {
  item: Page
  noImage?: boolean
}

const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const { slug, title, resume, date, image, caption, stack } = props.item
  const stackIcons = stack.split(",")
  return (
    <article className="card">
      <div className="row">
        {!props.noImage && (
          <div className="col-xl-3 col-md-4">
            <GatsbyImage
              className="card-img-top img-200"
              image={image}
              alt={caption}
            />
          </div>
        )}
        <div className="col-md">
          <div className="card-body">
            <Link to={`/${slug}`}>
              <h3 className="h5 card-title">{title}</h3>
            </Link>
            <h4 className="h6 card-subtitle mb-2">{date}</h4>
            <p className="card-text m-0">{resume}</p>
            <p className="card-text mt-1">
              {stackIcons.map(icon => {
                return (
                  <span
                    key={icon}
                    className="badge bg-light text-dark rounded-pill mt-1 me-1"
                  >
                    <Icon name={icon} /> {icon}
                  </span>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
