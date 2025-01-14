import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/UserLayout/Pages/Root";
import Error from "../Layout/UserLayout/ErrorPage/Error";
import SignIn from "../Layout/UserLayout/Pages/SignIn";
import SignUp from "../Layout/UserLayout/Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      }
    ],
  },
]);

export default router;
