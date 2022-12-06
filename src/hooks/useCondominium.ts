import { useContext } from "react";
import { CondominiumContext } from "../contexts/CondominiumContext";

export function useCondominium() {
  const value = useContext(CondominiumContext);

  return value;
}
