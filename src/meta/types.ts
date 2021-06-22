import React from "react"

export interface IconMeta {
  // color?: string
  fill?: boolean
  style?: React.CSSProperties
  svgPath: string
}

export interface LinkMeta {
  name: string
  displayName?: string
  icon: IconMeta
  href: string
}
