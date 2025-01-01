import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Registration from "./Components/Registration.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Profile",
    element: <Profile />,
  },
  {
    future: {
      v7_startTransition: true, // Enable state updates wrapping
      v7_relativeSplatPath: true, // Enable relative splat path changes
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
