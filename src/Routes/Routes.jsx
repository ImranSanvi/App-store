import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import NoApps from '../Pages/NoApps/NoApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('/trendingApp.json'),
        path: "/",
        Component: Home,
      },
      {
        loader: () => fetch('/allApps.json'),
        path:"/apps",
        Component: AllApps
      },
      {
        path: "/noApps",
        Component: NoApps
      },
      {
        loader: () => fetch('/allApps.json'),
        path:"/appDetails/:appId",
        Component: AppDetails
      },
      {
        loader: () => fetch('/allApps.json'),
        path: "/installedApps",
        Component: InstalledApps
      }
    ]
  },
]);