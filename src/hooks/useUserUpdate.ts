import { useContext } from "react";
import { UserUpdateContext } from "../contexts/UserUpdateContext";

export function useUserUpdate() {
  const value = useContext(UserUpdateContext);

  return value;
}
