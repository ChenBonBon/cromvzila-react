import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./routes/Home"));
const Folios = lazy(() => import("./routes/Folios"));
const Projects = lazy(() => import("./routes/Projects"));
const Prison = lazy(() => import("./routes/Prison"));

export const _routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/folios",
        element: <Folios />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/prison",
        element: <Prison />,
      },
    ],
  },
];

export const routes = createBrowserRouter(_routes);
