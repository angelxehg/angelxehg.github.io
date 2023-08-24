import React, { useContext, createContext } from "react"
import PropTypes from "prop-types"

const defaultThemeContext = {
  theme: "light",
  toggle: () => {
    throw new Error("Toggle theme not implemented")
  },
}

const ThemeContext = createContext(defaultThemeContext)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = props => {
  var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const toggle = () => toggleTheme(theme === "light" ? "dark" : "light")
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
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
