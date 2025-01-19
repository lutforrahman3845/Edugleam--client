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
import AddScholarship from "../Layout/Dashboard/DashboardPages/AddScholarship";
import AdminRoute from "./AdminRoute";
import ManageAllUsers from "../Layout/Dashboard/DashboardPages/ManageAllUsers";
import AdminModeratorRoute from "./AdminModaratorRoute";
import AllScholarships from "../Layout/UserLayout/Pages/AllScholarships";
import ScholarshipDetails from "../Layout/UserLayout/Pages/ScholarshipDetails";
import Payment from "../Layout/UserLayout/Pages/Payment";
import UserAppliedScholaership from "../Layout/Dashboard/DashboardPages/UserAppliedScholaership";
import UserReviews from "../Layout/Dashboard/DashboardPages/UserReviews";
import MangeScholarship from "../Layout/Dashboard/DashboardPages/MangeScholarship";
import ManageReview from "../Layout/Dashboard/DashboardPages/ManageReview";
import ManageAppliedScholarship from "../Layout/Dashboard/DashboardPages/ManageAppliedScholarship";

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

      },{
        path:"/scholarships",
        element:<AllScholarships/>
      },
      {
        path:"/scholarship/:id",
        element:<PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>
      },
      {
        path: "/payment/:id",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      }
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
        path:"/dashboard/manageScholarships",
        element:<AdminModeratorRoute><MangeScholarship/></AdminModeratorRoute>
      },
      {
        path:"/dashboard/manageUsers",
        element:<AdminRoute><ManageAllUsers></ManageAllUsers></AdminRoute>
      },{
        path:"/dashboard/userApplication",
        element:<PrivateRoute><UserAppliedScholaership/></PrivateRoute>
      },
      {
        path:"/dashboard/userReviews",
        element:<PrivateRoute><UserReviews/></PrivateRoute>
      },{
        path:"/dashboard/allreviews",
        element:<AdminModeratorRoute><ManageReview/></AdminModeratorRoute>
      },
      {
        path:"/dashboard/manageAppliedScholarship",
        element:<AdminModeratorRoute><ManageAppliedScholarship/></AdminModeratorRoute>
      }
    ]
  }
]);

export default router;
