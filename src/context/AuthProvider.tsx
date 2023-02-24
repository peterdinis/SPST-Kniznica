import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { auth } from "../firebase/init";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from "firebase/auth";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  forgotPassword: () => Promise<void>;
  resetPassword: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextModel>(
    {} as AuthContextModel,
  )
  
  export function useAuth(): AuthContextModel {
    return useContext(AuthContext)
  }
  