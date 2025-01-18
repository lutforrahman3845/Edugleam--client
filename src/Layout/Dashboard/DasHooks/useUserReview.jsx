import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
const useUserReview = () => {
    const axiosSecure = useAxiosSecure()
    const {user} =useAuth();
    const {data:userReviews , isLoading:userReviewLoading,  refetch:userReviewRefetch } = useQuery({
        queryKey: ['userReviews'],
        queryFn: async () => {
            const {data} =await axiosSecure.get(`/userReviews/${user?.email}`)
            return data
        }
    })
    return {userReviews, userReviewLoading, userReviewRefetch }
};

export default useUserReview;