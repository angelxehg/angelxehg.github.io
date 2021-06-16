import React from "react"
import { IconMeta } from "../meta/icons"

export interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (props: IconProps, defaultColor: string) => {
  const { size } = props
  return {
    width: size || "1rem",
    height: size || "1rem",
    color: defaultColor || "white",
  }
}

const Icon = (props: IconProps & { meta: IconMeta }) => {
  const { svg: IconSVG, color: metaColor, fill: metaFill } = props.meta
  const color = metaColor ? metaColor : "white"
  const fill = metaFill ? color : undefined
  return <IconSVG fill={fill} style={useIconStyle(props, color)} />
}

export default Icon
