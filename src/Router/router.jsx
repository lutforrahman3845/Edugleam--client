import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/UserLayout/Pages/Root";
import Error from "../Layout/UserLayout/ErrorPage/Error";
import SignIn from "../Layout/UserLayout/Pages/SignIn";
import SignUp from "../Layout/UserLayout/Pages/SignUp";
import Home from "../Layout/UserLayout/Pages/Home";
import About from "../Layout/UserLayout/Pages/About";
import Contact from "../Layout/UserLayout/Pages/Contact";
import RootDashboard from "../Layout/Dashboard/DashboardPages/RootDashboard";
import UserProfile from "../Layout/Dashboard/DashboardComponents/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AdminModeratorRoute from "./AdminModeratorRoute";
import AddScholarship from "../Layout/Dashboard/DashboardPages/AddScholarship";
import AdminRoute from "./AdminRoute";
import ManageAllUsers from "../Layout/Dashboard/DashboardPages/ManageAllUsers";

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
    path:"/dashboard",
    element:<RootDashboard/>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/dashboard/home",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/dashboard/addScholarship",
        element:<AdminModeratorRoute><AddScholarship></AddScholarship></AdminModeratorRoute>
      },
      {
        path:"/dashboard/manageUsers",
        element:<AdminRoute><ManageAllUsers></ManageAllUsers></AdminRoute>
      }
    ]
  }
]);

export default router;
