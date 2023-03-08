import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./component/wrapper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
  },
  {
    path: "/landing",
    element: <Wrapper />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
