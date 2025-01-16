import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Layout/Components/Loading";

const AdminModeratorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (user && (role === "admin" || role === "moderator")) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminModeratorRoute;
