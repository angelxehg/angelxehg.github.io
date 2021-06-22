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
) => {
  const { size } = props
  return {
    width: size || "0.9rem",
    height: size || "0.9rem",
    color: defaultColor,
    backgroundColor: props.meta.extraBc,
    borderRadius: props.meta.extraBcRad,
  }
}

const Icon = (props: IconProps & { meta: IconMeta }) => {
  const { theme } = useTheme()
  const { svgPath, color, fill: metaFill } = props.meta
  const IconSVG = require("../assets/" + svgPath)
  const defaultFill = theme === "dark" ? "white" : "black"
  const fill = metaFill ? (color ? color : defaultFill) : undefined
  return <IconSVG fill={fill} style={useIconStyle(props, color)} />
}

export default Icon
