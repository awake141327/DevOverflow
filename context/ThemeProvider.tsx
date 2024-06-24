// Theme Context Provider for the Whole App

"use client";

// Context and React Hooks can only be used within Client Components.
import React, { createContext, useState, useEffect, useContext } from "react";

// Defining Theme Context Type.
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// Creating a Theme Context with its Type defined.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  // Handling Dark and Light mode Theme change.
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Calling handleThemeChange() function whenever the mode changes.
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  // Theme Provider with value
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exporting a useTheme() function to use it in different components.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
