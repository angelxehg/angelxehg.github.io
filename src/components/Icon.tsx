import React from "react"
import { IconMeta } from "../meta/types"

export interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (
  props: IconProps & { meta: IconMeta }
): React.CSSProperties => {
  const { size } = props
  return {
    ...props.meta.style,
    width: size || "0.9rem",
    height: size || "0.9rem",
  }
}

const Icon = (props: IconProps & { meta: IconMeta }) => {
  const { svgPath, fill: metaFill } = props.meta
  const IconSVG = require("../assets/" + svgPath)
  return (
    <IconSVG
      className={`${metaFill ? "fill-me-anyway" : ""}`}
      style={useIconStyle(props)}
    />
  )
}

export default Icon
