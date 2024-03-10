import React from "react"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Layout = (props: LayoutProps): JSX.Element => (
  <>{props.children}</>
)

export default Layout
