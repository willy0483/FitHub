import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/lib/utils";
import { Spinner } from "./ui/loadingSpinner";

export const RequireAuth = () => {
  const { checkAuth, loading } = useAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await checkAuth();
    };

    checkAuthentication();
  }, [checkAuth, loading]);

  if (loading) {
    return <Spinner />;
  }

  return <Outlet />;
};
