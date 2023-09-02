import "./assets/css/App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/ui/Logo";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/explore";
import ProtectedRoute from "./util/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo name="Photosphere" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/explore",
    element: (
      <ProtectedRoute>
        <Explore />
      </ProtectedRoute>
    ),
  },
]);

export default function MyApp() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
