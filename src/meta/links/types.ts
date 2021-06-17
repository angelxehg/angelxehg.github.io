export interface IconMeta {
  color?: string
  fill?: boolean
  extraBc?: string
  extraBcRad?: string
  svgPath: string
}

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}
