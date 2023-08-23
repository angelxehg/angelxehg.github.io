import React from "react"

import "./Center.scss"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <div className="center-layout p-1">
    <main className="center-layout-content">{props.children}</main>
  </div>
)

export default CenterLayout
