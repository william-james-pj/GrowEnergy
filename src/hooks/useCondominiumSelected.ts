import { useContext } from "react";
import { CondominiumSelectedContext } from "../contexts/CondominiumSelectedContext";

export function useCondominiumSelected() {
  const value = useContext(CondominiumSelectedContext);

  return value;
}
