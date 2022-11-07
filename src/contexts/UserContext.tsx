import React, { createContext, ReactNode, useState, useEffect } from "react";

import axios from "axios";

import { NewUserType, UserType } from "../@types/types";
import { useAuth } from "../hooks/useAuth";
import { baseUrl } from "../constants/API";

type UserContextType = {
  isLoading: boolean;
  users: UserType[];
  getUsers: () => Promise<void>;
  creatUser: (newUser: NewUserType) => Promise<void>;
  updateUser: (userUpdated: UserType) => Promise<void>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider(props: UserContextProviderProps) {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUsers() {
    try {
      const response = await axios.get(`${baseUrl}/users`, {
        headers: { Authorization: `Bearer ${user?.idToken}` },
      });
      if (response.status === 200) {
        var aux: UserType[] = [];

        response.data.users.forEach((element: any) => {
          aux.push({
            id: element.uid,
            displayName: element.displayName,
            email: element.email,
            role: element.role,
            idToken: "",
            disabled: element.disabled,
          });
        });
        aux.sort(compareUser);
        setUsers(aux);
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
      // if (response.status === 200) {
      //   console.log(response.data);
      // }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function updateUser(userUpdated: UserType) {
    try {
      let newUser = {
        displayName: userUpdated.displayName,
        email: userUpdated.email,
        password: userUpdated.email,
        // disabled: userUpdated.disabled,
        // role: userUpdated.role,
      };

      setIsLoading(true);
      const response = await axios.patch(
        `${baseUrl}/users/${userUpdated.id}`,
        newUser,
        {
          headers: { Authorization: `Bearer ${user?.idToken}` },
        }
      );
      // if (response.status === 204) {
      //   console.log(response.data);
      // }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  function compareUser(a: UserType, b: UserType) {
    if (a.role > b.role) {
      return 1;
    }
    if (a.role < b.role) {
      return -1;
    }
    return 0;
  }

  return (
    <UserContext.Provider
      value={{ isLoading, users, getUsers, creatUser, updateUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
