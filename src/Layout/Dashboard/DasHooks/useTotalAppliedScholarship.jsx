import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const useTotalAppliedScholarship = () => {
    const axiosSecure = useAxiosSecure();
  const {
    data: allAppliedScholarships = [],
  } = useQuery({
    queryKey: ["allAppliedScholarship"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/totalappliedScholarship");
      return data;
    },
  });
    return allAppliedScholarships
}

export default useTotalAppliedScholarship;