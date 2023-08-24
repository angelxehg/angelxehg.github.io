import React from "react"
import { ThemeContextProvider } from "../components/Theme"
import PropTypes from "prop-types"

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
