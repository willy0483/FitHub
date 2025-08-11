import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export { AuthLayout };

const MainLayout = () => {
  return (
    <div>
      <section className="container mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export { MainLayout };
