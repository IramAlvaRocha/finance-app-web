import { createBrowserRouter } from "react-router";
import { Home } from "../Home/pages/Home";
import { Login } from "../auth/pages/Login";
import { AuthLayout } from "@/auth/Layout/AuthLayout";
import { Register } from "@/auth/pages/Register";
import { UserLayout } from "@/users/Layout/UserLayout";
import { Dashboard } from "@/users/pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "/users",
    element: <UserLayout />,
    children: [{
      path: "dashboard",
      element: <Dashboard />
    }]
  }
]);
