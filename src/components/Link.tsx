import React from "react"

import Icon from "./Icon"
import { LinkMeta } from "../meta/links"

const Link = (props: { meta: LinkMeta }) => {
  const { href, name, icon } = props.meta
  return (
    <a href={href} title={name} rel="external">
      <Icon meta={icon} /> {name}
    </a>
  )
}

export default Link
