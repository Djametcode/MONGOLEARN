import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./component/wrapper";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/",
    element: <Wrapper />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
