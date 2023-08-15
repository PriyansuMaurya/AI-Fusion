"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AllPropsFromLayout, Theme, themeContext } from "@/types";

const ThemeContext = createContext<themeContext>({
  theme: "",
  handleThemeSwitch: (): string => "",
});

export const ThemeContextProvider = ({ children }: AllPropsFromLayout) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // get the theme from localStorage on initial render
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeSwitch = () => {
    // toggle the theme and store it in localStorage
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
