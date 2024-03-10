import React, { useContext } from "react"

export type ThemeContextType = {
  theme: string,
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: string) => void
}

const defaultContextType: ThemeContextType = {
  theme: "dark",
  setTheme: () => {}
};

export const useTheme = () => useContext(ThemeContext)

export const ThemeContext = React.createContext<ThemeContextType>(defaultContextType);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const theme = "dark";
  const setTheme = (theme: string) => {
    console.log(theme);
  };
  return <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>;
};


export default ThemeProvider;
