import React from "react"

import Icon, {IconProps} from "./Icon"
import { LinkMeta } from "../meta/links"

const Link = (props: {
  meta: LinkMeta
  noTitle?: boolean
  noIcon?: boolean
  iconProps?: IconProps
  reset?: boolean
  className?: string
}) => {
  const classes = props.className ? props.className.split(" ") : []
  const { href, name, icon } = props.meta
  const { reset, noTitle, noIcon, iconProps } = props
  if (reset) {
    classes.push("text-reset")
  }
  return (
    <a href={href} title={name} className={classes.join(" ")} rel="external">
      {!noTitle && name} {!noIcon && <Icon meta={icon} {...iconProps} />}
    </a>
  )
}

export default Link
