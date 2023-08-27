import React from "react"

import "./Hero.scss"

interface HeroProps {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}

export const Hero = (props: HeroProps): JSX.Element => (
  <div className="hero bg-body-tertiary">
    <div className="hero-content container-lg ps-sm-4 pe-sm-4 pt-5 pb-4">
      {props.children}
    </div>
  </div>
)

export default Hero
