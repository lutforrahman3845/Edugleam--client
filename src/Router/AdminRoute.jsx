import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Layout/Components/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
