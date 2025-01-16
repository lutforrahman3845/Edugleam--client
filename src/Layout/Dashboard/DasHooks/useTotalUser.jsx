import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const useTotalUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: totalUsersCount } = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/totalUsers");
      return data;
    },
  });
  return totalUsersCount;
};

export default useTotalUser;
