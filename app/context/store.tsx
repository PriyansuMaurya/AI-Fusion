"use client"
import { createContext, useContext, useState  } from "react"

const ThemeContext = createContext({})

export const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark" )
  }

  return (
    <ThemeContext.Provider value={{theme, handleThemeSwitch}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext);
