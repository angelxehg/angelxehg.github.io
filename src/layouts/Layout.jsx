import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { CreateLink } from "../components/Link"

const shortcodes = { CreateLink }

const Layout = props => (
  <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
)

export default Layout
