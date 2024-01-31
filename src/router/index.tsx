import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
