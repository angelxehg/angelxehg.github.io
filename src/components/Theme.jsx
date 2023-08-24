import React, { useContext, createContext } from "react"
import PropTypes from "prop-types"

const defaultThemeContext = {
  theme: "light",
}

const ThemeContext = createContext(defaultThemeContext)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = props => {
  var theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
