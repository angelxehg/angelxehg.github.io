import React from "react"

import "./Hero.scss"

interface HeroProps {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
}

export const Hero = (props: HeroProps): JSX.Element => (
  <div className="hero">
    <div className="container-lg ps-sm-4 pe-sm-4 huge-header pt-3 pb-3">
      {props.children}
    </div>
  </div>
)

export default Hero;
