import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/UserLayout/Pages/Root";
import Error from "../Layout/UserLayout/ErrorPage/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
    },
  ]);

  export default router;