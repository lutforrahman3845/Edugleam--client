import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserDB = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:userDB, isLoading:userLoading} = useQuery({
        queryKey: ["userDB"],
        enabled: !loading,
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/userDB/${user?.email}`)
            return data;
        }
    })
    return {userDB, userLoading};
};

export default useUserDB;