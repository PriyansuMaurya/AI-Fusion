"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { AllPropsFromLayout, Theme, themeContext } from "@/types";

const ThemeContext = createContext<themeContext>({
  theme: "",
  handleThemeSwitch: (): string => "",
});

export const ThemeContextProvider = ({ children }: AllPropsFromLayout) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
