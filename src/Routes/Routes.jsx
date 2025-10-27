import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('trendingApp.json'),
        path: "/",
        Component: Home,
      },
      {
        loader: () => fetch('allApps.json'),
        path:"/apps",
        Component: AllApps
      }
    ]
  },
]);