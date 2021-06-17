import React from "react"

import Icon, { IconProps } from "./Icon"
import allLinks, { getLinkMeta, LinkMeta } from "../meta/links"

const ClickableIcon = (props: {
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
    <>
      <a
        href={href}
        title={name}
        className={classes.join(" ")}
        rel="external"
        style={styles}
      >
        {!noTitle && name}
      </a>
      {!noIcon && (
        <span className="ms-1">
          <Icon meta={icon} {...iconProps} />
        </span>
      )}
    </>
  )
}

const extendMeta = (
  base: LinkMeta,
  extend?: { title: string; href: string }
) => {
  if (extend) {
    const { title: name, href } = extend
    return { ...base, name, href }
  }
  return base
}

export const CreateIcon = (props: {
  className?: string
  iconProps: IconProps
  from: string
  extend?: { title: string; href: string }
}) => {
  const { from, extend } = props
  const baseMeta = getLinkMeta(from)
  const newMeta = extendMeta(baseMeta, extend)
  return <ClickableIcon {...props} meta={newMeta} />
}

export const CreateLink = (
  props: LinkProps & { from: string; extend?: { title: string; href: string } }
) => {
  const { from, extend } = props
  const baseMeta = getLinkMeta(from)
  const newMeta = extendMeta(baseMeta, extend)
  return <Link {...props} meta={newMeta} />
}
