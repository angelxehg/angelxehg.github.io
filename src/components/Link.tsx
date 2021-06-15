import React from "react"

import Icon from "./Icon"
import { LinkMeta } from "../meta/links"

const Link = (props: {
  meta: LinkMeta
  reset?: boolean
  className?: string
}) => {
  const classes = props.className ? props.className.split(" ") : []
  if (props.reset) {
    classes.push("text-reset")
  }
  const { href, name, icon } = props.meta
  return (
    <a href={href} title={name} className={classes.join(" ")} rel="external">
      {name} <Icon meta={icon} />
    </a>
  )
}

export default Link
