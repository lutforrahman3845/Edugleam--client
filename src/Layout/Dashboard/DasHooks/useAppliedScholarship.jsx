import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const useAppliedScholarship = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:appliedScholarship=[], isLoading:loadingAppliedScholar, refetch:appliedRefetch} = useQuery({
        queryKey: [" userApplication", user?.email],
        queryFn: async () => {
            const {data} =await axiosSecure.get(`/aplliedScholarShip/${user?.email}`)
            return data;
        }
    })
    return {appliedScholarship, loadingAppliedScholar, appliedRefetch};
};

export default useAppliedScholarship;