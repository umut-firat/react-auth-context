import { Navigate, createBrowserRouter } from "react-router-dom";

import { authLoader } from "@/lib/auth";
import { AuthProvider } from "@/providers";

import Home from "@/app/home";
import Login from "@/app/login";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: authLoader,
    element: <AuthProvider />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
