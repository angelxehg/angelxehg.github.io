export interface IconMeta {
  color?: string
  fill?: boolean
  extraBc?: string
  extraBcRad?: string
  svg: any
}

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}
