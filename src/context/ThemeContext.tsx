import React, { useContext, useEffect, useState } from "react"

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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const changeHandler = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addListener(changeHandler);

    return () => mediaQuery.removeListener(changeHandler);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;
