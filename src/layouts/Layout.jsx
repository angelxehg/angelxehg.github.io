import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

const Layout = props => (
  <MDXProvider>{props.children}</MDXProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
