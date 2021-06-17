import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { ExtendedLink } from "../components/Link"

const shortcodes = { ExtendedLink }

const Layout = (props) => (
  <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
)

export default Layout
