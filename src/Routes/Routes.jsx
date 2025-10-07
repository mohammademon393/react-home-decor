import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import MainLayOut from '../Layout/MainLayOut';
import ErrorPage from '../Pages/ErrorPage';
import Wishlist from '../Pages/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=> fetch('/furnitureData.json'),
        hydrateFallbackElement: <p>Looding...</p>
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
    ],
  },
]);

export default router;