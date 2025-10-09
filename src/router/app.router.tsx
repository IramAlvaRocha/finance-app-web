import { createBrowserRouter } from "react-router";
import { Home } from "../Home/pages/Home";
import { Login } from "../auth/pages/Login";
import { AuthLayout } from "@/auth/Layout/AuthLayout";
import { Register } from "@/auth/pages/Register";

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
        element: <Login />  // Esto renderiza /auth
      },
      {
        path: "register",  // 👈 sin la barra
        element: <Register />
      }
    ]
  }
]);
