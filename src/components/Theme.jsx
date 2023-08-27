import React, { useContext, createContext } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import PropTypes from "prop-types"

const defaultThemeContext = {
  theme: "light",
  toggle: () => {
    throw new Error("Toggle theme not implemented")
  },
}

const ThemeContext = createContext(defaultThemeContext)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = props => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      const toggle = () => toggleTheme(theme === "light" ? "dark" : "light")
      return (
        <ThemeContext.Provider value={{ theme, toggle }}>
          {props.children}
        </ThemeContext.Provider>
      )
    }}
  </ThemeToggler>
)

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
