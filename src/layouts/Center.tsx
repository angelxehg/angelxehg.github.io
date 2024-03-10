import React from "react"

import "./Center.scss"
import ThemeProvider from "../context/ThemeContext"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <ThemeProvider>
    <div className="center-layout p-1">
      <main className="center-layout-content">{props.children}</main>
    </div>
  </ThemeProvider>
)

export default CenterLayout
