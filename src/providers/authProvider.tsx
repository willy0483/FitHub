import { useState, useEffect } from "react";
import type { Session } from "@/lib/type";
import { AuthContext } from "@/lib/utils";
import { BACKEND_URL } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

const SESSION_KEY = "session";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");

    if (sessionData) {
      try {
        const parsedUserData: Session = JSON.parse(sessionData);
        setSession(parsedUserData);
      } catch (error) {
        console.error("Error parsing userData:", error);
        setSession(null);
      }
    } else {
      setSession(null);
    }
    setLoading(false);
  }, []);

  const createSession = (payload: Session) => {
    setSession(payload);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  };

  const logout = () => {
    setSession(null);
    sessionStorage.removeItem(SESSION_KEY);
    navigate("/auth/login");
  };

  const checkAuth = async () => {
    const sessionData = sessionStorage.getItem(SESSION_KEY);
    console.log(sessionData);

    if (!sessionData) {
      logout();
      navigate("/auth/login");
    }

    let user: Session | null = null;
    try {
      if (sessionData) {
        user = JSON.parse(sessionData);
      } else {
        logout();
        navigate("/auth/login");
        return;
      }
    } catch (error) {
      console.error("Error parsing session data:", error);
      logout();
      return "/auth/login";
    }

    if (!user?.access_token) {
      logout();
      navigate("/auth/login");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/auth/verify`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
      });

      if (!response.ok) {
        logout();
        navigate("/auth/login");
        return;
      }

      return undefined;
    } catch (error) {
      console.error("Error verifying auth:", error);
      logout();
      navigate("/auth/login");
      return;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        createSession,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
