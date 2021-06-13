import React from "react"
import "./center.scss"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <div className="center-layout">
    <main className="center-layout-content">
      {props.children}
    </main>
  </div>
)

export default CenterLayout
