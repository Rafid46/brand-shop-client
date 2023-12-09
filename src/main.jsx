/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./Components/AddProduct";
import BrandDetails from "./Components/Extra page/BrandDetails";
import UpdateProduct from "./Components/Homepage/UpdateRoute/UpdateProduct";
import Details from "./Components/Details/Details";
import MyCart from "./Components/MyCart/MyCart";
import Login from "./Components/User/Login";
import SignUp from "./Components/User/SignUp";
import AuthProviders from "./Providers/AuthProviders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Naming from "./Components/Naming";
import { ThemeProvider } from "@material-tailwind/react";
import Material from "./Material";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("/Brands.json"),
  },
  {
    path: "/addProduct",
    element: (
      <PrivateRoute>
        <AddProduct></AddProduct>
      </PrivateRoute>
    ),
  },
  {
    path: "/brandDetails/:brand",
    element: <BrandDetails></BrandDetails>,
  },
  {
    path: "/updateProduct/:id",
    element: (
      <PrivateRoute>
        <UpdateProduct></UpdateProduct>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000
/product/${params.id}`),
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000
/product/${params.id}`),
  },
  {
    path: "/myCart",
    element: (
      <PrivateRoute>
        <MyCart></MyCart>
      </PrivateRoute>
    ),
    loader: () => fetch("http://localhost:5000/myCart"),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
  {
    path: "/naming",
    element: <Naming></Naming>,
  },
  {
    path: "/material",
    element: <Material></Material>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
