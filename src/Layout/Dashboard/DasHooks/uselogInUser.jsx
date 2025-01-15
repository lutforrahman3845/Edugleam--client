import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const uselogInUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: logInUser, isLoading: logInUserLoading } = useQuery({
    queryKey: ["logInUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    },
  });
  return { logInUser, logInUserLoading };
};

export default uselogInUser;
