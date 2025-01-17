import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useScholarshipInfo = (id) => {
    const axiosSecure = useAxiosSecure();
    
    const { data: scholarShipDetails, isLoading: scholarshipDetailsLoading } = useQuery({
        queryKey: ["scholarshipDetails"],
        enabled: !!id,
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/scholarshipDetails/${id}`);
          return data;
        },
      });
    return {scholarShipDetails, scholarshipDetailsLoading}
};

export default useScholarshipInfo;