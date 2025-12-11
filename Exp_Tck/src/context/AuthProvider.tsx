import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);

   const login = async (email: string, password: string) => {
     const response = await axios.post("/login", { email, password });
     setToken(response.data.token);
   };

  const logout = useCallback(() => {
    setToken(null);
  }, []);

  const refresh = useCallback(async () => {
    // your refresh logic
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}
