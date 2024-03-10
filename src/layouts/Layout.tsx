import React from "react"
import ThemeProvider from "../context/ThemeContext"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Layout = (props: LayoutProps): JSX.Element => (
  <ThemeProvider>{props.children}</ThemeProvider>
)

export default Layout
