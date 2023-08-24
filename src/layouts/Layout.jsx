import React from "react"
import PropTypes from "prop-types"

import { ThemeContextProvider } from "../components/Theme"

const Layout = props => (
  <ThemeContextProvider>{props.children}</ThemeContextProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
