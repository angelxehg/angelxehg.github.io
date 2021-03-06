import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import { ThemeContextProvider } from "../components/Theme"
import { CreateLink, CreateBadge } from "../components/Link"

const shortcodes = { CreateLink, CreateBadge }

const Layout = props => (
  <ThemeContextProvider>
    <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
  </ThemeContextProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
