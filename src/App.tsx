import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./page/Login";
import Register from "./page/register";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
