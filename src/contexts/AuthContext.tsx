import React, { createContext, ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import axios from "axios";

import { UserType } from "../@types/types";
import { baseUrl } from "../constants/API";

type AuthContextType = {
  user: UserType | undefined;
  signin: (useProps: createUserProps) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  errorMsg: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type createUserProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>();
  const [errorMsg, setErrorMsg] = useState("");

  async function signin(useProps: createUserProps) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        useProps.email,
        useProps.password
      );

      const uid = userCredential.user?.uid;
      const token = await userCredential.user.getIdToken();

      setUser({
        id: uid || "",
        displayName: userCredential.user?.displayName ?? "",
        email: userCredential.user?.email ?? "",
        role: "",
        idToken: token,
        disabled: false,
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("Este endereço de e-mail já está em uso!");
      } else {
        setErrorMsg(error.message);
      }
    }
  }

  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user?.uid;
      const token = await userCredential.user.getIdToken();

      setUser({
        id: uid || "",
        displayName: userCredential.user?.displayName ?? "",
        email: userCredential.user?.email ?? "",
        role: "",
        idToken: token,
        disabled: false,
      });
      setErrorMsg("");
    } catch (error: any) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setErrorMsg("Usuário ou senha incorreto");
        return;
      }
      if (error.code == "auth/user-disabled") {
        setErrorMsg("Usuário desativado");
        return;
      }
      setErrorMsg(error.message);
    }
  }

  async function getRole(id: string, idToken: string): Promise<string | null> {
    try {
      const response = await axios.get(`${baseUrl}/users/${id}`, {
        headers: { Authorization: `Bearer ${idToken}` },
      });
      if (response.status === 200) {
        return response.data.user.role;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(undefined);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const { uid, email, displayName } = userAuth;

        const token = await userAuth.getIdToken(true);
        const role = await getRole(uid, token);

        setUser({
          id: uid,
          displayName: displayName ?? "",
          email: email ?? "",
          role: role ?? "",
          idToken: token,
          disabled: false,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        login,
        logout,
        errorMsg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
