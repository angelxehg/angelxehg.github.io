import React from "react"
import { IconMeta } from "../meta/types"
import { useTheme } from "./Theme"

export interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (
  props: IconProps & { meta: IconMeta },
  defaultColor?: string
): React.CSSProperties => {
  const { size } = props
  return {
    ...props.meta.extraStyles,
    width: size || "0.9rem",
    height: size || "0.9rem",
    color: defaultColor
  }
}

const Icon = (props: IconProps & { meta: IconMeta }) => {
  const { theme } = useTheme()
  const { svgPath, color, fill: metaFill } = props.meta
  const IconSVG = require("../assets/" + svgPath)
  const defaultFill = theme === "dark" ? "white" : "black"
  const fill = metaFill ? (color ? color : defaultFill) : undefined
  return <IconSVG className={`${metaFill ? 'fill-me-anyway' : ''}`} fill={fill} style={useIconStyle(props, color)} />
}

export default Icon
