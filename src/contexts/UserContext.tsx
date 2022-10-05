import React, { createContext, ReactNode, useState, useEffect } from "react";

import axios from "axios";

import { NewUserType } from "../@types/types";
import { useAuth } from "../hooks/useAuth";

type UserContextType = {
  isLoading: boolean;
  getUsers: () => Promise<void>;
  creatUser: (newUser: NewUserType) => Promise<void>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider(props: UserContextProviderProps) {
  const baseUrl = "https://us-central1-growenergy-4a892.cloudfunctions.net/api";

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  //add loader

  async function getUsers() {
    try {
      const response = await axios.get(`${baseUrl}/users`, {
        headers: { Authorization: `Bearer ${user?.idToken}` },
      });
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // add isActive
  async function creatUser(newUser: NewUserType) {
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseUrl}/users`, newUser, {
        headers: { Authorization: `Bearer ${user?.idToken}` },
      });
      if (response.status === 200) {
        console.log(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ isLoading, getUsers, creatUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
