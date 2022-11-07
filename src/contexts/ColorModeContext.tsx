import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { DefaultTheme, ThemeProvider } from "styled-components";

import themes from "../styles/themes";

type ColorContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ColorContextProviderProps = {
  children: ReactNode;
};

export const ColorContext = createContext({} as ColorContextType);

export function ColorModeContext(props: ColorContextProviderProps) {
  const defaultMode = useColorScheme();
  const [theme, setTheme] = useState(themes[defaultMode || "light"]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  };

  useEffect(() => {}, []);

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorContext.Provider>
  );
}
