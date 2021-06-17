import React from "react"
import { IconMeta } from "../meta/types"

export interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (
  props: IconProps & { meta: IconMeta },
  defaultColor: string
) => {
  const { size } = props
  return {
    width: size || "0.9rem",
    height: size || "0.9rem",
    color: defaultColor || "white",
    backgroundColor: props.meta.extraBc,
    borderRadius: props.meta.extraBcRad,
  }
}

const Icon = (props: IconProps & { meta: IconMeta }) => {
  const { svgPath, color: metaColor, fill: metaFill } = props.meta
  const IconSVG = require("../assets/" + svgPath)
  const color = metaColor ? metaColor : "white"
  const fill = metaFill ? color : undefined
  return <IconSVG fill={fill} style={useIconStyle(props, color)} />
}

export default Icon
