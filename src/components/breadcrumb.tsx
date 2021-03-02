import React from "react"

import { Link } from "gatsby"

interface BreadLink {
  title: string
  to?: string
}

export const BreadcrumbLink = (props: { item: BreadLink }) => {
  const { title, to } = props.item
  return (
    <li className="breadcrumb-item">
      {to ? <Link to={to}>{title}</Link> : title}
    </li>
  )
}

export const Breadcrumb = (props: { links: BreadLink[] }) => (
  <div className="card no-bg divr-b">
    <div className="card-body">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          {props.links.map((link, i) => <BreadcrumbLink key={i} item={link} />)}
        </ol>
      </nav>
    </div>
  </div>
)
