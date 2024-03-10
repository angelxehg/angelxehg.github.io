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

export const ThemeContextProvider = props => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => {
      const toggle = () => toggleTheme(theme === "light" ? "dark" : "light")
      return (
        <ThemeContext.Provider value={{ theme, toggle }}>
          {props.children}
        </ThemeContext.Provider>
      )
    }}
  </ThemeContext.Consumer>
)

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
