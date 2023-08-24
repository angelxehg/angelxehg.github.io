import React from "react"
import { ThemeContextProvider } from "../components/Theme"

import "./Center.scss"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <ThemeContextProvider>
    <div className="center-layout p-1">
      <main className="center-layout-content">{props.children}</main>
    </div>
  </ThemeContextProvider>
)

export default CenterLayout
