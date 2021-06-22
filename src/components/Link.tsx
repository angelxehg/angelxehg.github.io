import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Icon, { IconProps } from "./Icon"
import { getLinkMeta } from "../meta/links"
import { LinkMeta } from "../meta/types"

const ClickableIcon = (props: { meta: LinkMeta; iconProps: IconProps }) => {
  const { href, name, displayName, icon } = props.meta
  return (
    <a
      href={href}
      title={displayName || name}
      className="me-2"
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
}

const Link = (props: LinkProps & { meta: LinkMeta }) => {
  const { href, name, displayName, icon } = props.meta
  const { noTitle, noIcon, noUnderline, iconProps } = props
  const styles = noUnderline ? { textDecoration: "none" } : undefined
  const isLocal = href[0] === "/"
  return (
    <>
      {isLocal ? (
        <GatsbyLink to={href} title={displayName || name} style={styles}>
          {(!noTitle && displayName) || name}
        </GatsbyLink>
      ) : (
        <a
          href={href}
          title={displayName || name}
          rel="external"
          style={styles}
        >
          {(!noTitle && displayName) || name}
        </a>
      )}
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

export const CreateBadge = (
  props: LinkProps & { from: string; extend?: { title: string; href: string } }
) => {
  return (
    <span className="badge rounded-pill mt-1 me-1">
      <CreateLink noUnderline {...props} />
    </span>
  )
}
