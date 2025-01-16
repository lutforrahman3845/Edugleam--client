import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const useTotalScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const { data: totalScholarships } = useQuery({
    queryKey: ["totalScholarships"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/totalScholarships");
      return data;
    },
  });
  return totalScholarships;
};

export default useTotalScholarships;
