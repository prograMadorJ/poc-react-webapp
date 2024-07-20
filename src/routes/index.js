import { createBrowserRouter, redirect } from "react-router-dom";

import MainLayout from "../layouts/Main";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import PedidosPage from "../pages/Pedidos";
import { authProvider } from "./authProvider";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    // loader() {
    //   const { token } = authProvider;
    //   return { token };
    // },
    Component: MainLayout,
    children: [
      {
        path: "",
        // loader: authLoader,
        children: [
          { path: "/", element: <DashboardPage /> },
          { path: "/pedidos", element: <PedidosPage /> },
        ],
      },
      {
        path: "login",
        // loader: loginLoader,
        element: <LoginPage />,
      },
    ],
  },
]);

function loginLoader() {
    const { token } = authProvider;
    if (token) {
      return redirect("/");
    }
    return null;
  }

function authLoader() {
  const { token } = authProvider;
  if (!token) {
    return redirect("/login");
  }
  return null;
}
