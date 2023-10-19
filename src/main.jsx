import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./Components/AddProduct";
import BrandDetails from "./Components/Extra page/BrandDetails";
import UpdateProduct from "./Components/Homepage/UpdateRoute/UpdateProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // loader: () => fetch("http://localhost:5000/added"),
    loader: () => fetch("/Brands.json"),
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/brandDetails/:brand",
    element: <BrandDetails></BrandDetails>,
  },
  {
    path: "/updateProduct/:brand/:id",
    element: <UpdateProduct></UpdateProduct>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/added/brand/${params.id}`),
    // loader: () => fetch("http://localhost:5000/added"),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
