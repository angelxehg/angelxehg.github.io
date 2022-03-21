import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import { ThemeContextProvider } from "../components/Theme"

const Layout = props => (
  <ThemeContextProvider>
    <MDXProvider>{props.children}</MDXProvider>
  </ThemeContextProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
