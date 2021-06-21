import React, { useState, useContext, createContext } from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const defaultThemeContext = {
  theme: "light",
  toggle: () => {
    throw new Error("Toggle theme not implemented")
  },
}

const ThemeContext = createContext(defaultThemeContext)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = (props) => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      const toggle = () => toggleTheme(theme === 'light' ? 'dark' : 'light')
      return (
        <ThemeContext.Provider value={{ theme, toggle }}>
          {props.children}
        </ThemeContext.Provider>
      )
    }}
  </ThemeToggler>
)
