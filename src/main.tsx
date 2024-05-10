import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.css";
import { SnackbarProvider, RouterProvider } from "@/providers";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element does not exist.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider />
    </SnackbarProvider>
  </React.StrictMode>
);
