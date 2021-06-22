import React from "react";

export interface IconMeta {
  color?: string
  fill?: boolean
  extraStyles?: React.CSSProperties
  svgPath: string
}

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}
