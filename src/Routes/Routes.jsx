import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import MainLayOut from '../Layout/MainLayOut';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
    ],
  },
]);

export default router;