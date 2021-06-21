import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { ThemeContextProvider } from "../components/Theme"
import { CreateLink } from "../components/Link"

const shortcodes = { CreateLink }

const Layout = props => (
  <ThemeContextProvider>
    <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
  </ThemeContextProvider>
)

export default Layout
