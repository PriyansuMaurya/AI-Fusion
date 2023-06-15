"use client"
import { createContext, useContext, useState, ReactNode  } from "react"

const ThemeContext = createContext({})

interface AllPropsFromLayout {
  children?: ReactNode
}

export const ThemeContextProvider = ({children}: AllPropsFromLayout) => {

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
