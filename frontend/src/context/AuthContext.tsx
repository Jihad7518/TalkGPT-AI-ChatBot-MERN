
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import {
    checkAuthStatus,
    loginUser,
    logoutUser,
    signupUser,
  } from "../helpers/api-communicator";
  
  type User = {
    name: string;
    email: string;
  };
  type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  };
