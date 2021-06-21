import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

interface Theme {
  name: "dark" | "light"
  bgClass: "bg-dark" | "bg-light"
  textClass: "text-light" | "text-dark"
}

const darkTheme: Theme = {
  name: "dark",
  bgClass: "bg-dark",
  textClass: "text-light",
}

const lightTheme: Theme = {
  name: "light",
  bgClass: "bg-light",
  textClass: "text-dark",
}

type ThemeContextType = {
  theme: Theme
  toggle: () => void
}

const defaultThemeContext: ThemeContextType = {
  theme: darkTheme,
  toggle: () => {
    throw new Error("Toggle theme not implemented")
  },
}

const ThemeContext = createContext(defaultThemeContext)

export const useTheme = () => useContext(ThemeContext)

interface ThemeContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(darkTheme)
  const toggleTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
