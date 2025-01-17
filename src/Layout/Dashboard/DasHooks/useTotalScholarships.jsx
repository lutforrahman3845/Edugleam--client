import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const useTotalScholarships = () => {
         const axiosPublic = useAxiosPublic()
  const { data: totalScholarships = { totalScholerships: 0 } } = useQuery({
    queryKey: ["totalScholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/totalScholarships");
      return data;
    },
  });
  return totalScholarships;
};

export default useTotalScholarships;
