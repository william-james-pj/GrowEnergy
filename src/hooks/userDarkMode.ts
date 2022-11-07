import { useContext } from "react";
import { ColorContext } from "../contexts/ColorModeContext";

export function useDarkMode() {
  const value = useContext(ColorContext);

  return value;
}
