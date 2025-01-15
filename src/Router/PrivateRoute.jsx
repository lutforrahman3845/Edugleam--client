import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Layout/Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Loading></Loading>;
  if (user && user.email) return children;
  return <Navigate to={"/signIn"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
