import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./component/wrapper";
import BerandaUser from "./component/berandaUser";
import App from "./App";
import Profile from "./component/profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
  },
  {
    path: "/beranda",
    element: <BerandaUser />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/send",
    element: <App />,
  },
  {
    path: "/landing",
    element: <Wrapper />,
  },
  {
    path: "/beranda",
    element: <BerandaUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
