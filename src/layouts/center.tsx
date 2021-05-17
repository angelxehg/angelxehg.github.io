import React from "react"
interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <div className="row text-center justify-content-center full-h">
    <main className="col align-self-center fill-sm">{props.children}</main>
  </div>
)

export default CenterLayout
