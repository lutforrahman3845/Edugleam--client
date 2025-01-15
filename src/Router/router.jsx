import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/UserLayout/Pages/Root";
import Error from "../Layout/UserLayout/ErrorPage/Error";
import SignIn from "../Layout/UserLayout/Pages/SignIn";
import SignUp from "../Layout/UserLayout/Pages/SignUp";
import Home from "../Layout/UserLayout/Pages/Home";
import About from "../Layout/UserLayout/Pages/About";
import Contact from "../Layout/UserLayout/Pages/Contact";
import RootDashboard from "../Layout/Dashboard/DashboardPages/RootDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:"/contact",
        element:<Contact/>

      },
    ],
  },
  {
    path:"/dashboard/userHome",
    element:<RootDashboard/>
  }
]);

export default router;
