import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import { RequireAuth } from "@/components/requireAuth";
import NotFoundPage from "@/pages/notFoundPage";
import LoginPage from "@/pages/auth/login/loginPage";
import { AuthLayout } from "@/pages/layout";
import HomePage from "@/pages/homePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route index element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/home" element={<HomePage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
