import { clsx, type ClassValue } from "clsx";
import { createContext, useContext } from "react";
import { twMerge } from "tailwind-merge";
import type { Session } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AuthContextType {
  session: Session | null;
  loading: boolean;
  createSession: (payload: Session) => void;
  logout: () => void;
  checkAuth: () => Promise<string | undefined>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
