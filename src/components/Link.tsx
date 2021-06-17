import React from "react"

import Icon, { IconProps } from "./Icon"
import allLinks, { LinkMeta } from "../meta/links"

export const ClickableIcon = (props: {
  className?: string
  meta: LinkMeta
  iconProps: IconProps
}) => {
  const classes = props.className ? props.className.split(" ") : []
  const { href, name, icon } = props.meta
  return (
    <a
      href={href}
      title={name}
      className={"me-2 " + classes.join(" ")}
      rel="external"
      style={{ textDecoration: "none" }}
    >
      <Icon meta={icon} {...props.iconProps} />
    </a>
  )
}

interface LinkProps {
  noTitle?: boolean
  noIcon?: boolean
  noUnderline?: boolean
  iconProps?: IconProps
  reset?: boolean
  className?: string
}

const Link = (props: LinkProps & { meta: LinkMeta }) => {
  const classes = props.className ? props.className.split(" ") : []
  const { href, name, icon } = props.meta
  const { reset, noTitle, noIcon, noUnderline, iconProps } = props
  if (reset) {
    classes.push("text-reset")
  }
  const styles = noUnderline ? { textDecoration: "none" } : undefined
  return (
    <a
      href={href}
      title={name}
      className={classes.join(" ")}
      rel="external"
      style={styles}
    >
      {!noTitle && name} {!noIcon && <Icon meta={icon} {...iconProps} />}
    </a>
  )
}

export const ExtendedLink = (props: LinkProps & { linkMetaName: string, title: string, href: string }) => {
  const { linkMetaName, title: name, href } = props
  const baseMeta = allLinks.find(i => i.name === linkMetaName)
  if (!baseMeta) {
    throw new Error(`Base link '${linkMetaName}' not found`);
  }
  const newMeta: LinkMeta = {...baseMeta, name, href}
  return (
    <Link {...props} meta={newMeta}/>
  )
}

export default Link
