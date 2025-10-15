import { createBrowserRouter } from "react-router";
import { Home } from "../Home/pages/Home";
import { Login } from "../auth/pages/Login";
import { AuthLayout } from "@/auth/Layout/AuthLayout";
import { Register } from "@/auth/pages/Register";
import { UserLayout } from "@/users/Layout/UserLayout";
import { Dashboard } from "@/users/pages/Dashboard";
import { SettingsPage } from "@/users/pages/Settings";
import { AllTransactions } from "@/transactions/pages/AllTransactions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AuthLayout />,  // Sin path aquí
    children: [
      {
        path: "login",  // Ruta completa: /login
        element: <Login />
      },
      {
        path: "register",  // Ruta completa: /register
        element: <Register />
      }
    ]
  },
  {
    element: <UserLayout />,  // Sin path aquí
    children: [
      {
        path: "dashboard",  // Ruta completa: /dashboard
        element: <Dashboard />
      },
      {
        path: "settings",  // Ruta completa: /settings
        element: <SettingsPage />
      },
      {
        path: "transactions/all",
        element: <AllTransactions />
      }
    ]
  }
]);

