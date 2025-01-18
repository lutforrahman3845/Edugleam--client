
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const useAllReviews = () => {
    const axiosSecure = useAxiosSecure();
    const {data:allReviews, isLoading:reviewsLoading, refetch:reviewsRefetch}  = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const {data} =await axiosSecure.get("/allReviews")
            return data;
        }
    })
    return {allReviews, reviewsLoading, reviewsRefetch};
};

export default useAllReviews;