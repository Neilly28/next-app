"use client";

import { createContext, useState } from "react";

interface ThemeContextType {
  mode: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggle: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
