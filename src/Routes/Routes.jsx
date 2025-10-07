import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Products from '../Pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/products",
    Component: Products
  },
]);

export default router;