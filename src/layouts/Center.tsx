import React from "react"

import "./Center.scss"

import Layout from "./Layout"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <Layout>
    <div className="center-layout p-1">
      <main className="center-layout-content">{props.children}</main>
    </div>
  </Layout>
)

export default CenterLayout
