import React, { createContext, ReactNode, useState, useEffect } from "react";

import { UserType } from "../@types/types";
import { useAuth } from "../hooks/useAuth";

type UserUpdateContextType = {
  setUser: (user: UserType) => void;
  clearUser: () => void;
  getUser: () => UserType | null;
};

type UserUpdateContextProviderProps = {
  children: ReactNode;
};

export const UserUpdateContext = createContext({} as UserUpdateContextType);

export function UserUpdateContextProvider(
  props: UserUpdateContextProviderProps
) {
  const [oldValue, setOldValue] = useState<UserType | null>(null);

  function setUser(user: UserType) {
    setOldValue(user);
  }

  function clearUser() {
    setOldValue(null);
  }

  function getUser(): UserType | null {
    return oldValue;
  }

  return (
    <UserUpdateContext.Provider value={{ setUser, clearUser, getUser }}>
      {props.children}
    </UserUpdateContext.Provider>
  );
}
