import React from "react"

import Icon, { IconProps } from "./Icon"
import { LinkMeta } from "../meta/links"

export const ClickableIcon = (props: { className?: string, meta: LinkMeta, iconProps: IconProps }) => {
  const classes = props.className ? props.className.split(" ") : []
  const { href, name, icon } = props.meta
  return (
    <a href={href} title={name} className={'me-2 ' + classes.join(" ")} rel="external" style={{ textDecoration: "none" }}>
      <Icon meta={icon} {...props.iconProps} />
    </a>
  )
}

const Link = (props: {
  meta: LinkMeta
  noTitle?: boolean
  noIcon?: boolean
  noUnderline?: boolean
  iconProps?: IconProps
  reset?: boolean
  className?: string
}) => {
  const classes = props.className ? props.className.split(" ") : []
  const { href, name, icon } = props.meta
  const { reset, noTitle, noIcon, noUnderline, iconProps } = props
  if (reset) {
    classes.push("text-reset")
  }
  const styles = noUnderline ? { textDecoration: "none" } : undefined
  return (
    <a href={href} title={name} className={classes.join(" ")} rel="external" style={styles}>
      {!noTitle && name} {!noIcon && <Icon meta={icon} {...iconProps} />}
    </a>
  )
}

export default Link
